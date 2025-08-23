'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[50vh] bg-gradient-to-br from-gray-50 to-white py-12 relative">
      {/* Big Donate Button - Top Right Corner */}
      <div className="absolute top-6 right-6 z-50">
        <button className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-3 border-orange-300/50 rounded-full px-10 py-4 text-lg font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out flex items-center space-x-3 group overflow-hidden">
          {/* Subtle shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-600 rounded-full"></div>

          {/* Modern donation icon */}
          <div className="relative z-10">
            <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>

          <span className="relative z-10 tracking-wide">DONATE</span>

          {/* Gentle pulse ring */}
          <div className="absolute -inset-1 rounded-full bg-orange-400/20 animate-ping opacity-75"></div>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - Responsive: 1 column on mobile/tablet, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full min-h-[400px]">

          {/* Cell 1: Logo with Soft Background */}
          <div className="relative overflow-hidden group min-h-[300px]">
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
                <div className="bg-white/90 hero-soft-blur hero-translucent-border p-8 rounded-2xl">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa70a28525f6f491aaa751610252a199c%2Fd7543f582d4f477599d341da96d48e2b?format=webp&width=800"
                    alt="Malayalees Friends Logo"
                    width={240}
                    height={240}
                    className="mx-auto mb-4"
                    priority
                  />
                  <h2 className="text-xl font-bold text-gray-800">
                    Malayalees Friends
                  </h2>
                  <p className="text-base text-gray-600 mt-2">
                    Cultural Events Federation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 2: Large Modern Image (spans 2 rows on desktop, single row on mobile) */}
          <div className="relative overflow-hidden lg:row-span-2 group min-h-[400px]">
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
