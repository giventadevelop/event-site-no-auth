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
        {/* Grid Layout - Mobile: First column cells side by side, second column below; Desktop: custom columns */}
        <div className="grid gap-8 h-full min-h-[400px]">

          {/* Mobile layout: First column cells in same row */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {/* Cell 1: Logo - Simple image and text */}
            <div className="relative overflow-hidden group min-h-[250px] flex flex-col items-center justify-center p-4">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fa70a28525f6f491aaa751610252a199c%2Fd7543f582d4f477599d341da96d48e2b?format=webp&width=800"
                alt="Malayalees Friends Logo"
                width={180}
                height={180}
                className="mx-auto mb-3"
                priority
              />
              <h2 className="text-lg font-bold text-gray-800 text-center">
                Malayalees Friends
              </h2>
              <p className="text-sm text-gray-600 mt-1 text-center">
                Cultural Events Federation
              </p>
            </div>

            {/* Cell 3: Unite India Image - No text overlay */}
            <div className="relative overflow-hidden group min-h-[250px] rounded-[2rem]">
              <div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background: `url('https://cdn.builder.io/api/v1/image/assets%2Fa70a28525f6f491aaa751610252a199c%2F7e04d4cf965b47f9b58322797a9f4ba2?format=webp&width=800') center/cover`,
                  filter: 'brightness(0.9) contrast(1.1)'
                }}
              ></div>
            </div>
          </div>

          {/* Cell 2: Large Modern Image - Mobile */}
          <div className="relative overflow-hidden group min-h-[300px] rounded-[2rem] lg:hidden">
            <div
              className="absolute inset-0 rounded-[2rem]"
              style={{
                background: `url('https://images.pexels.com/photos/8386366/pexels-photo-8386366.jpeg') center/cover`,
                filter: 'contrast(1.1) saturate(0.9)'
              }}
            ></div>
          </div>

          {/* Desktop layout: Original grid with modifications */}
          <div className="hidden lg:grid lg:grid-cols-[3fr_5fr] gap-8">

            {/* Cell 1: Logo - Simple image and text */}
            <div className="relative overflow-hidden group min-h-[300px] flex flex-col items-center justify-center">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fa70a28525f6f491aaa751610252a199c%2Fd7543f582d4f477599d341da96d48e2b?format=webp&width=800"
                alt="Malayalees Friends Logo"
                width={240}
                height={240}
                className="mx-auto mb-4"
                priority
              />
              <h2 className="text-xl font-bold text-gray-800 text-center">
                Malayalees Friends
              </h2>
              <p className="text-base text-gray-600 mt-2 text-center">
                Cultural Events Federation
              </p>
            </div>

            {/* Cell 2: Large Modern Image - No text overlay */}
            <div className="relative overflow-hidden lg:row-span-2 group min-h-[400px] rounded-[2rem]">
              <div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background: `url('https://images.pexels.com/photos/8386366/pexels-photo-8386366.jpeg') center/cover`,
                  filter: 'contrast(1.1) saturate(0.9)'
                }}
              ></div>
            </div>

            {/* Cell 3: Unite India Image - No text overlay */}
            <div className="relative overflow-hidden group min-h-[300px] rounded-[2rem]">
              <div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background: `url('https://cdn.builder.io/api/v1/image/assets%2Fa70a28525f6f491aaa751610252a199c%2F7e04d4cf965b47f9b58322797a9f4ba2?format=webp&width=800') center/cover`,
                  filter: 'brightness(0.9) contrast(1.1)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
