'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-16 items-start">

          {/* Left Side - Image */}
          <div className="flex-1 lg:max-w-md">
            <div className="relative">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fa70a28525f6f491aaa751610252a199c%2F65153e294c1f4d929d42d289254cfd9e?format=webp&width=800"
                alt="Kerala Cultural Heritage"
                width={400}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">About Foundation</p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                The Malayali Cultural Exchange Foundation
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-8">
                Preserve and promote the rich cultural heritage of Kerala
              </h3>
            </div>

            {/* Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                The Unite India Corporation Foundation for Education and Events is a vibrant, community-driven organization based in New Jersey, USA, dedicated to reviving real Malayali culture, empowering the next generation through education, and offering a nostalgic sense of home to our community.
              </p>

              <p className="text-base">
                Our mission is to preserve and promote the rich cultural heritage of Kerala while fostering a deeper connection among Malayalis in the USA, creating a sense of belonging and unity. We focus on providing quality events that go beyond face-value interactions, offering genuine cultural experiences and values.
              </p>

              <p className="text-base">
                Through educational programs, cultural events, and community-building activities, we aim to engage and inspire the new generation. Whether it's learning the Malayalam language, participating in Kerala's traditional festivals, or understanding the deeper meanings of our customs, we ensure that our initiatives go beyond surface-level celebrations.
              </p>

              <p className="text-base">
                At the heart of our foundation is the belief in the power of cultural exchange. We strive to create opportunities for our community to reconnect with their roots while also sharing the beauty of Kerala with others. Our events are specifically designed to attract and engage young people, helping them build a deeper appreciation for their heritage, while also offering a sense of nostalgia and connection to those already established in the USA.
              </p>

              <p className="text-base font-medium text-gray-900">
                The Unite India Corporation Foundation for Education and Events serves as a home away from home, offering a place to celebrate, educate, and embrace the vibrant spirit of Kerala. Join us in our mission to nurture the next generation of Malayalis and continue the traditions that define our culture, fostering a stronger, more connected community in the USA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
