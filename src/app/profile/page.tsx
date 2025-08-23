import ProfileForm from "@/components/ProfileForm";
import type { UserProfileDTO } from "@/types";

export default async function ProfilePage() {
  // Since no authentication is required, we can use a mock userId
  const userId = 'guest-user';

  // Create a mock profile since no authentication is required
  const mockProfile: UserProfileDTO = {
    id: 1,
    userId: userId,
    firstName: 'Guest',
    lastName: 'User',
    email: 'guest@example.com',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    notes: '',
    familyName: '',
    cityTown: '',
    district: '',
    educationalInstitution: '',
    profileImageUrl: '',
    userRole: 'MEMBER',
    userStatus: 'ACTIVE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto" style={{ paddingTop: '118px' }}>
      <div className="space-y-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Manage Account</h2>
            <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          </div>
        </div>
        <div className="rounded-xl shadow p-8 sm:p-10" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0f7fa 100%)' }}>
          <p className="mb-6 text-sm text-gray-500 font-medium">Update your contact information.</p>
          <ProfileForm initialProfile={mockProfile} />
        </div>
      </div>
    </div>
  );
}