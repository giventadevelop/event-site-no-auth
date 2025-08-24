'use client';

import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const AboutSection: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">


          {/* Content */}
          <div className="w-full">
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
