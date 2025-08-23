import type { EventDetailsDTO } from '@/types';
import { getAppUrl } from '@/lib/env';

// Add EventWithMedia type for local use
export interface EventWithMedia extends EventDetailsDTO {
  thumbnailUrl?: string;
  placeholderText?: string;
}

// Move all event fetching to the server component
export async function fetchEventsWithMedia(): Promise<EventWithMedia[]> {
  const baseUrl = getAppUrl();
  console.log('Fetching events from:', `${baseUrl}/api/proxy/event-details`);

  let eventsData: EventDetailsDTO[] = [];

  try {
    let eventsResponse = await fetch(
      `${baseUrl}/api/proxy/event-details?sort=startDate,asc`,
      { cache: 'no-store' }
    );

    console.log('Events response status:', eventsResponse.status);

    if (eventsResponse.ok) {
      try {
        eventsData = await eventsResponse.json();
        console.log('Successfully fetched events:', eventsData.length);
      } catch (err) {
        console.error('Failed to parse events JSON:', err);
        eventsData = [];
      }
    } else {
      console.log('Events fetch failed with status:', eventsResponse.status);
      // Try fallback
      try {
        eventsResponse = await fetch(
          `${baseUrl}/api/proxy/event-details?sort=startDate,desc`,
          { cache: 'no-store' }
        );
        if (eventsResponse.ok) {
          try {
            eventsData = await eventsResponse.json();
            console.log('Successfully fetched events (fallback):', eventsData.length);
          } catch (err) {
            console.error('Failed to parse events JSON (fallback):', err);
            eventsData = [];
          }
        } else {
          console.log('Fallback events fetch also failed with status:', eventsResponse.status);
        }
      } catch (fallbackErr) {
        console.error('Fallback events fetch error:', fallbackErr);
      }
    }
  } catch (fetchErr) {
    console.error('Events fetch error:', fetchErr);
    eventsData = [];
  }

  // Use Promise.allSettled instead of Promise.all to handle individual failures gracefully
  const eventsWithMediaResults = await Promise.allSettled(
    eventsData.map(async (event: EventDetailsDTO) => {
      try {
        console.log(`Fetching media for event ID: ${event.id}, title: ${event.title}`);

        // Add timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        try {
          const flyerRes = await fetch(
            `${baseUrl}/api/proxy/event-medias?eventId.equals=${event.id}&eventFlyer.equals=true`,
            {
              cache: 'no-store',
              signal: controller.signal
            }
          );
          clearTimeout(timeoutId);

          let mediaArray: any[] = [];

          if (flyerRes.ok) {
            try {
              const flyerData = await flyerRes.json();
              mediaArray = Array.isArray(flyerData) ? flyerData : (flyerData ? [flyerData] : []);
              console.log(`Event ${event.id}: Found ${mediaArray.length} flyer media items`);
            } catch (jsonErr) {
              console.error(`Event ${event.id}: Failed to parse flyer JSON:`, jsonErr);
              mediaArray = [];
            }
          } else {
            console.log(`Event ${event.id}: Flyer fetch failed with status ${flyerRes.status}`);
          }

          if (!mediaArray.length) {
            const featuredController = new AbortController();
            const featuredTimeoutId = setTimeout(() => featuredController.abort(), 10000);

            try {
              const featuredRes = await fetch(
                `${baseUrl}/api/proxy/event-medias?eventId.equals=${event.id}&isFeaturedImage.equals=true`,
                {
                  cache: 'no-store',
                  signal: featuredController.signal
                }
              );
              clearTimeout(featuredTimeoutId);

              if (featuredRes.ok) {
                try {
                  const featuredData = await featuredRes.json();
                  mediaArray = Array.isArray(featuredData) ? featuredData : (featuredData ? [featuredData] : []);
                  console.log(`Event ${event.id}: Found ${mediaArray.length} featured media items`);
                } catch (jsonErr) {
                  console.error(`Event ${event.id}: Failed to parse featured JSON:`, jsonErr);
                  mediaArray = [];
                }
              } else {
                console.log(`Event ${event.id}: Featured image fetch failed with status ${featuredRes.status}`);
              }
            } catch (featuredErr) {
              clearTimeout(featuredTimeoutId);
              console.error(`Event ${event.id}: Featured image fetch error:`, featuredErr);
            }
          }

          if (mediaArray.length > 0) {
            const fileUrl = mediaArray[0].fileUrl;
            if (fileUrl) {
              return {
                ...event,
                thumbnailUrl: fileUrl,
                placeholderText: mediaArray[0].altText || event.title
              };
            }
          }

          return {
            ...event,
            thumbnailUrl: undefined,
            placeholderText: event.title
          };
        } catch (mediaErr) {
          console.error(`Event ${event.id}: Media fetch error:`, mediaErr);
          return {
            ...event,
            thumbnailUrl: undefined,
            placeholderText: event.title
          };
        }
      } catch (eventErr) {
        console.error(`Event ${event.id}: General error:`, eventErr);
        return {
          ...event,
          thumbnailUrl: undefined,
          placeholderText: event.title
        };
      }
    })
  );

  // Filter out failed promises and return successful results
  const eventsWithMedia: EventWithMedia[] = eventsWithMediaResults
    .filter((result): result is PromiseFulfilledResult<EventWithMedia> => result.status === 'fulfilled')
    .map(result => result.value);

  console.log(`Successfully processed ${eventsWithMedia.length} events with media`);
  return eventsWithMedia;
}

export async function fetchHeroImageForEvent(eventId: number): Promise<string | null> {
  const baseUrl = getAppUrl();
  try {
    const mediaRes = await fetch(
      `${baseUrl}/api/proxy/event-medias?eventId.equals=${eventId}&isFeaturedImage.equals=true`,
      { cache: 'no-store' }
    );
    if (mediaRes.ok) {
      const mediaData = await mediaRes.json();
      const mediaArray = Array.isArray(mediaData) ? mediaData : (mediaData ? [mediaData] : []);
      if (mediaArray.length > 0 && mediaArray[0].fileUrl) {
        return mediaArray[0].fileUrl;
      }
    }
  } catch {
    return null;
  }
  return null;
}

