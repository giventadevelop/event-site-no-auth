import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/dashboard" className="text-xl font-bold text-gray-800">
                TaskMngr
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/profile"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

