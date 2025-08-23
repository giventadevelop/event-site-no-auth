'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[50vh] bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - 3 cells with proper spacing */}
        <div className="grid grid-cols-2 gap-8 h-full min-h-[400px]">

          {/* Cell 1: Logo (Top Left) */}
          <div className="bg-white p-8 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/images/charity-theme/logo_black.png"
                alt="Malayalees US Logo"
                width={200}
                height={80}
                className="mx-auto mb-4"
                priority
              />
              <h2 className="text-lg font-semibold text-gray-800">
                Malayalees US
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Cultural Events Federation
              </p>
            </div>
          </div>

          {/* Cell 2: Large Poster (Right - spans 2 rows) */}
          <div className="bg-white p-8 rounded-3xl row-span-2 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/images/spark_kerala_event_2025/event_1/khnj_flyer.avif"
                alt="Featured Event Poster"
                fill
                className="object-cover rounded-2xl"
                style={{
                  clipPath: 'polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Spark Kerala 2025</h3>
                <p className="text-white/90">Cultural Celebration Event</p>
              </div>
            </div>
          </div>

          {/* Cell 3: Image with Caption (Bottom Left) */}
          <div className="bg-white p-8 rounded-3xl">
            <div className="relative h-full min-h-[180px] mb-4">
              <Image
                src="/images/side_images/kerala_coconut_tree_and_lake.avif"
                alt="Kerala Heritage"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>
            <div className="text-center mt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Kerala Heritage
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Celebrating the rich cultural heritage and natural beauty of Kerala through community events and traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
