import type { Metadata } from 'next';
import './globals.css';
import Header from '../../components/charity-sections/Header';
import Footer from '../../components/charity-sections/Footer';

export const metadata: Metadata = {
  title: 'Charity Website - Malayalees US',
  description: 'A beautiful charity website showcasing our mission, causes, and impact in the community.',
  keywords: 'charity, non-profit, community, social impact, donations, malayalees',
  openGraph: {
    title: 'Charity Website - Malayalees US',
    description: 'A beautiful charity website showcasing our mission, causes, and impact in the community.',
    type: 'website',
  },
};

export default function CharityThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Independent layout wrapper */}
      <div className="charity-theme-layout">
        <Header variant="charity" />
        <div className="px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
