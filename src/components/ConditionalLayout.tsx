'use client'

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define routes that should have independent layouts
  const independentRoutes = ['/charity-theme', '/admin', '/landing-page'];
  const isIndependentRoute = independentRoutes.some(route => pathname.startsWith(route));

  if (isIndependentRoute) {
    return <>{children}</>; // Render without Header/Footer for independent routes
  }

  // Default layout with Header and Footer for main app routes
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
