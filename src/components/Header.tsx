'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/#about-us", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/#team-section", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

// Function to handle smooth scrolling with offset for fixed header
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('/#')) {
    e.preventDefault();
    const targetId = href.substring(2);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight - 20; // Extra 20px for breathing room
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
};

type HeaderProps = {
  hideMenuItems?: boolean;
};

export function Header({ hideMenuItems = false }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(5px)' }}>
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-[18px]">
        <div className="relative flex items-center justify-between h-[58px]">
          {/* Logo - only show on pages other than home */}
          <div className="flex items-center gap-2 shrink-0">
            {pathname !== "/" && (
              <Link href="/" className="flex items-center">
                <img
                  src="/images/mcefee_logo_black_border_transparent.png"
                  alt="MCEFEE Logo"
                  style={{
                    height: '58px',
                    width: 'auto',
                    minWidth: '120px',
                    opacity: 0.9
                  }}
                />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-yellow-300 hover:text-yellow-100 px-3 py-2 rounded-md text-sm font-bold ${pathname === item.href ? "text-yellow-100" : ""
                  }`}
                style={{ fontSize: 15, transition: 'color 0.3s ease' }}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-2 pb-3 space-y-1`}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-yellow-300 hover:text-yellow-100 px-3 py-2 rounded-md text-base font-bold ${pathname === item.href ? "text-yellow-100 bg-gray-800" : ""
                }`}
              onClick={(e) => {
                setIsMenuOpen(false);
                handleSmoothScroll(e, item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}