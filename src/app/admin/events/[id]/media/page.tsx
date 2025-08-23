import { fetchUserProfileServer, fetchMediaServer, fetchOfficialDocsServer } from './ApiServerActions';
import { fetchEventDetailsServer } from '@/app/admin/ApiServerActions';
import { MediaClientPage } from './MediaClientPage';

interface UploadMediaPageProps { params: { id: string } }

export default async function UploadMediaPage({ params }: UploadMediaPageProps) {
  const resolvedParams = typeof params.then === 'function' ? await params : params;
  const eventId = resolvedParams.id;
  const mediaList = eventId ? await fetchMediaServer(eventId) : [];
  const eventDetails = eventId ? await fetchEventDetailsServer(eventId) : null;
  const officialDocsList = eventId ? await fetchOfficialDocsServer(eventId) : [];

  // Since no authentication is required, we can use a mock userProfileId
  const userProfileId = 1;

  return (
    <MediaClientPage
      eventId={eventId}
      mediaList={mediaList}
      eventDetails={eventDetails}
      officialDocsList={officialDocsList}
      userProfileId={userProfileId}
    />
  );
}