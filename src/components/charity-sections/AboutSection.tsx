'use client';

import React from 'react';
import Image from 'next/image';
import ArrowRightIcon from './icons/ArrowRightIcon';

const AboutSection: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-16 items-start">

          {/* Left Side - Image Only (Clean Portrait) */}
          <div className="flex-1 lg:max-w-md">
            <div className="relative">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fa70a28525f6f491aaa751610252a199c%2F65153e294c1f4d929d42d289254cfd9e?format=webp&width=800"
                alt="Kerala Cultural Heritage"
                width={400}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-5 h-2 bg-yellow-400 rounded"></div>
                <p className="text-gray-600">About foundation</p>
              </div>

              <h2 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight mb-8 text-blue-600">
                Preserve and promote the rich cultural heritage of Kerala
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-900 font-medium">
                Preserve and promote the rich cultural heritage of Kerala
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                The Unite India Corporation Foundation for Education and Events is a vibrant, community-driven organization based in New Jersey, USA, dedicated to reviving real Malayali culture, empowering the next generation through education, and offering a nostalgic sense of home to our community. Our mission is to preserve and promote the rich cultural heritage of Kerala while fostering a deeper connection among Malayalis in the USA, creating a sense of belonging and unity.
              </p>

              <div className="pt-4">
                <button className="bg-transparent text-gray-900 border border-yellow-400 rounded-full px-6 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-in-out flex items-center space-x-2">
                  <span>Explore more</span>
                  <ArrowRightIcon width={16} height={16} color="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
