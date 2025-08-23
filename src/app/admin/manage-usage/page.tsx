import { fetchAdminProfileServer } from './ApiServerActions';
import ManageUsageClient from './ManageUsageClient';

export default async function ManageUsagePage() {
  // Since no authentication is required, we can use a mock userId
  const userId = 'guest-user';
  const adminProfile = await fetchAdminProfileServer(userId);
  // Note: We are not fetching all users here anymore to keep it simple.
  // The ManageUsageClient will need to handle fetching users if required.
  return <ManageUsageClient adminProfile={adminProfile} />;
}