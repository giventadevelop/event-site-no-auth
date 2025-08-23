'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[50vh] bg-gradient-to-br from-gray-50 to-white py-12 relative">
      {/* Big Donate Button - Top Right Corner */}
      <div className="absolute top-6 right-6 z-50">
        <button className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white border-3 border-orange-300/50 rounded-full px-12 py-5 text-xl font-bold hover:from-orange-600 hover:to-orange-700 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 transition-all duration-400 ease-out flex items-center space-x-4 group overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-full"></div>

          {/* Sparkle animation overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

          {/* Gift/Donation Icon */}
          <div className="relative z-10">
            <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13l4-4m-4 4l-4-4" />
            </svg>
          </div>

          <span className="relative z-10 tracking-wide">DONATE NOW</span>

          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-orange-400/30 animate-ping"></div>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - 3 cells with soft translucent effects */}
        <div className="grid grid-cols-2 gap-8 h-full min-h-[400px]">

          {/* Cell 1: Logo with Soft Background (Top Left) */}
          <div className="relative overflow-hidden group">
            {/* Translucent background with soft edges */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/60 backdrop-blur-sm rounded-[2rem] shadow-lg shadow-gray-200/50"></div>
            <div
              className="absolute inset-0 opacity-30 rounded-[2rem]"
              style={{
                background: `url('https://images.pexels.com/photos/2268551/pexels-photo-2268551.jpeg') center/cover`,
                filter: 'blur(1px) saturate(0.8)'
              }}
            ></div>

            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/90 hero-soft-blur hero-translucent-border p-6 rounded-2xl">
                  <Image
                    src="/images/charity-theme/logo_black.png"
                    alt="Malayalees US Logo"
                    width={160}
                    height={64}
                    className="mx-auto mb-3"
                    priority
                  />
                  <h2 className="text-lg font-semibold text-gray-800">
                    Malayalees US
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Cultural Events Federation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 2: Large Modern Image (Right - spans 2 rows) */}
          <div className="relative overflow-hidden row-span-2 group">
            {/* Soft translucent container */}
            <div
              className="absolute inset-0 rounded-[2rem]"
              style={{
                background: `url('https://images.pexels.com/photos/8386366/pexels-photo-8386366.jpeg') center/cover`,
                filter: 'contrast(1.1) saturate(0.9)'
              }}
            ></div>

            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 rounded-[2rem]"></div>

            {/* Soft edge effect */}
            <div className="absolute inset-0 rounded-[2rem] shadow-2xl shadow-gray-300/30"></div>

            <div className="relative z-10 p-8 h-full flex items-end">
              <div className="bg-white/95 hero-soft-blur hero-translucent-border p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Modern Vision</h3>
                <p className="text-gray-700">
                  Embracing contemporary design and innovation in cultural celebration
                </p>
              </div>
            </div>
          </div>

          {/* Cell 3: Soft Gradient Image (Bottom Left) */}
          <div className="relative overflow-hidden group">
            {/* Soft translucent background */}
            <div
              className="absolute inset-0 rounded-[2rem]"
              style={{
                background: `url('https://images.pexels.com/photos/11280357/pexels-photo-11280357.jpeg') center/cover`,
                filter: 'blur(0.5px) saturate(0.7) brightness(1.1)'
              }}
            ></div>

            {/* Gradient overlay for soft effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30 rounded-[2rem]"></div>

            {/* Soft shadow */}
            <div className="absolute inset-0 rounded-[2rem] shadow-xl shadow-purple-200/40"></div>

            <div className="relative z-10 p-8 h-full flex items-end">
              <div className="bg-white/90 hero-soft-blur hero-translucent-border p-5 rounded-xl w-full">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Artistic Expression
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Celebrating creativity through soft, contemporary visual narratives that inspire and connect communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
