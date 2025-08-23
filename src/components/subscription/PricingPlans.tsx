'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { UserSubscriptionDTO } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PRO_PLAN = {
  name: 'Pro Plan',
  price: 19.99,
  features: [
    'Unlimited access to all features',
    'Advanced analytics',
    'Custom reports',
    'Priority support',
    'Data export',
  ],
  stripePriceId: 'price_1234567890abcdef1234567890abcdef', // Placeholder, replace with actual
};

interface PricingPlansProps {
  currentSubscription: UserSubscriptionDTO | null;
}

export function PricingPlans({ currentSubscription }: PricingPlansProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user just logged in and needs to subscribe
  useEffect(() => {
    const shouldSubscribe = searchParams?.get('subscribe') === 'true';
    if (shouldSubscribe && !currentSubscription) {
      handleSubscribe();
    }
  }, [searchParams]);

  const handleSubscribe = async (eventId = 1) => {
    try {
      setIsLoading(true);
      setError(null);

      // Since no authentication is required, we can use a mock user
      const mockUserEmail = 'guest@example.com';

      if (!PRO_PLAN.stripePriceId) {
        throw new Error('Subscription configuration error. Please contact support.');
      }

      const response = await fetch('/api/billing/manage-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stripePriceId: PRO_PLAN.stripePriceId,
          isSubscribed: false,
          stripeCustomerId: currentSubscription?.stripeCustomerId,
          stripeSubscriptionId: currentSubscription?.stripeSubscriptionId,
          isCurrentPlan: false,
          eventId,
        }),
      });

      let errorMessage = 'An error occurred while processing your subscription';

      try {
        const data = await response.json();

        if (!response.ok) {
          errorMessage = data.error || `Request failed with status ${response.status}`;
          throw new Error(errorMessage);
        }

        if (!data.url) {
          throw new Error('No checkout URL returned from the server');
        }

        window.location.href = data.url;
      } catch (parseError) {
        console.error('Error processing response:', parseError);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageSubscription = async (eventId = 1) => {
    try {
      setIsLoading(true);
      setError(null);

      if (!currentSubscription?.stripeSubscriptionId) {
        throw new Error('Required information not available');
      }

      const response = await fetch('/api/billing/manage-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isSubscribed: true,
          stripeCustomerId: currentSubscription.stripeCustomerId,
          isCurrentPlan: true,
          stripePriceId: currentSubscription.stripePriceId,
          stripeSubscriptionId: currentSubscription.stripeSubscriptionId,
          eventId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No portal URL returned');
      }
    } catch (error) {
      console.error('Error managing subscription:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while managing your subscription');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelSubscription = async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!currentSubscription?.stripeSubscriptionId) {
        throw new Error('Required information not available');
      }

      const response = await fetch('/api/billing/cancel-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stripeSubscriptionId: currentSubscription.stripeSubscriptionId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      router.refresh();
    } catch (error) {
      console.error('Error canceling subscription:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while canceling your subscription');
    } finally {
      setIsLoading(false);
    }
  };

  const isSubscribed = currentSubscription?.stripePriceId === PRO_PLAN.stripePriceId &&
    currentSubscription?.status !== 'canceled';

  const showManageButton = isSubscribed && currentSubscription?.stripeSubscriptionId;

  return (
    <div className="max-w-2xl mx-auto px-6 lg:px-8">
      <div className="rounded-lg border-2 border-[#39E079] p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{PRO_PLAN.name}</h2>
          <p className="text-4xl font-bold mb-6">
            ${PRO_PLAN.price}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </p>
        </div>
        <ul className="space-y-4 mb-8">
          {PRO_PLAN.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#39E079"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-3"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        {error && (
          <div className="mb-4 p-3 text-sm text-red-800 bg-red-100 rounded-md">
            {error}
          </div>
        )}
        {currentSubscription?.status === 'canceled' && (
          <div className="mb-4 p-3 text-sm text-orange-800 bg-orange-100 rounded-md">
            Your subscription has been canceled. You can subscribe again to restore access.
          </div>
        )}
        <div className="space-y-4">
          {!currentSubscription ? (
            <>
              <Link
                href={{
                  pathname: "/sign-in",
                  query: { redirect_url: "/pricing?subscribe=true" }
                }}
                className="block"
              >
                <Button
                  className="w-full bg-[#39E079] hover:bg-[#32c96d] text-white"
                  size="lg"
                >
                  Get Started
                </Button>
              </Link>
            </>
          ) : showManageButton ? (
            <Button
              onClick={() => handleManageSubscription()}
              className="w-full bg-gray-800 hover:bg-gray-900 text-white"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Manage Subscription'}
            </Button>
          ) : (
            <Button
              onClick={() => handleSubscribe()}
              className="w-full bg-[#39E079] hover:bg-[#32c96d] text-white"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Subscribe Now'}
            </Button>
          )}
          {showManageButton && (
            <Button
              onClick={handleCancelSubscription}
              className="w-full border border-gray-300 hover:bg-gray-50"
              variant="outline"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Cancel Subscription'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}