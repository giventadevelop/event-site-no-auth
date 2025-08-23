import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe/init';
import { getAppUrl } from '@/lib/env';
import type { UserProfileDTO, UserSubscriptionDTO } from '@/types';

export async function POST(req: Request) {
  try {
    // Since no authentication is required, we can use a mock userId
    const userId = 'guest-user';
    const stripe = getStripe(); // Initialize Stripe only when needed

    // Get base URL from environment or request
    let baseUrl = getAppUrl();
    if (!baseUrl) {
      // Extract base URL from the request
      const urlObj = new URL(req.url);
      baseUrl = `${urlObj.protocol}//${urlObj.host}`;
      console.warn('NEXT_PUBLIC_APP_URL not set, using request URL:', baseUrl);
    }

    // Ensure baseUrl starts with http/https
    if (!baseUrl.startsWith('http')) {
      baseUrl = `https://${baseUrl}`;
    }

    const body = await req.json();

    if (!body.stripePriceId) {
      return NextResponse.json({ error: 'Missing required field: stripePriceId' }, { status: 400 });
    }

    try {
      // Since no authentication is required, we can use a mock email
      const email = 'guest@example.com';

      // Try to get existing user profile via proxy
      let userProfile: UserProfileDTO | null = null;
      try {
        const response = await fetch(`${baseUrl}/api/proxy/user-profiles/by-user/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          userProfile = await response.json();
        } else if (response.status !== 404) {
          throw new Error(`Failed to fetch user profile: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }

      // Try to get existing subscription via proxy
      let subscription: UserSubscriptionDTO | null = null;
      try {
        const response = await fetch(`${baseUrl}/api/proxy/user-subscriptions/by-profile/${userProfile?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const subscriptions: UserSubscriptionDTO[] = await response.json();
          subscription = subscriptions[0]; // Get the first subscription
        } else if (response.status !== 404) {
          throw new Error(`Failed to fetch subscription: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
        throw new Error('Failed to fetch subscription data');
      }

      // Create subscription if it doesn't exist via proxy
      if (!subscription) {
        try {
          const newSubscription: UserSubscriptionDTO = {
            status: 'pending',
            userProfile: {
              id: 0,
              userId,
              email,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          };

          const response = await fetch(`${baseUrl}/api/proxy/user-subscriptions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSubscription),
          });

          if (!response.ok) {
            throw new Error(`Failed to create subscription: ${response.statusText}`);
          }

          subscription = await response.json();
        } catch (error) {
          console.error('Error creating subscription:', error);
          throw new Error('Failed to create subscription');
        }
      }

      // If user already has a Stripe customer ID, use it
      let customerId = body.stripeCustomerId;

      try {
        // If no customer ID, check if one exists for this user's email
        if (!customerId) {
          const customers = await stripe.customers.list({
            email,
            limit: 1,
          });

          if (customers.data.length > 0) {
            customerId = customers.data[0].id;
          } else {
            // Create a new customer if none exists
            const customer = await stripe.customers.create({
              email,
              metadata: {
                userId: userId,
              },
            });
            customerId = customer.id;
          }

          // Update subscription with the customer ID via proxy
          if (subscription && subscription.id) {
            try {
              const updatedSubscription: UserSubscriptionDTO = {
                ...subscription,
                stripeCustomerId: customerId,
              };

              const response = await fetch(`${baseUrl}/api/proxy/user-subscriptions/${subscription.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedSubscription),
              });

              if (!response.ok) {
                throw new Error(`Failed to update subscription: ${response.statusText}`);
              }
            } catch (error) {
              console.error('Error updating subscription:', error);
            }
          }
        }
      } catch (error) {
        console.error('Error handling Stripe customer:', error);
        }

        let url: string;

        if (body.isSubscribed && body.stripeSubscriptionId && customerId) {
          const session = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: `${baseUrl}/dashboard`,
          });

          if (!session.url) {
            throw new Error('Failed to create billing portal session');
          }
          url = session.url;
        } else {
          // Determine payment methods based on environment
          const isProduction = process.env.NODE_ENV === 'production';
          const paymentMethods: Stripe.Checkout.SessionCreateParams.PaymentMethodType[] = isProduction
            ? ['card', 'link', 'cashapp'] // Add more options for production
            : ['card', 'link']; // Keep it simple for local development

          const session = await stripe.checkout.sessions.create({
            success_url: `${baseUrl}/dashboard`,
            cancel_url: `${baseUrl}/dashboard`,
            payment_method_types: paymentMethods,
            mode: 'subscription',
            billing_address_collection: 'auto',
            customer: customerId,
            subscription_data: {
              metadata: {
                userId: userId,
                ...(body.eventId && { eventId: String(body.eventId) }),
              },
            },
            line_items: [
              {
                price: body.stripePriceId,
                quantity: 1,
              },
            ],
            metadata: {
              userId: userId,
              ...(body.eventId && { eventId: String(body.eventId) }),
            },
          });

          if (!session.url) {
            throw new Error('Failed to create checkout session');
          }
          url = session.url;
        }

        return NextResponse.json({ url });
      } catch (stripeError) {
        console.error('Stripe API error:', stripeError);
        return NextResponse.json(
          { error: stripeError instanceof Error ? stripeError.message : 'Failed to process subscription' },
          { status: 400 }
      );
    }
  } catch (error) {
    console.error('Subscription handler error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
