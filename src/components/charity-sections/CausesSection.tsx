'use client';

import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const causes = [
  {
    id: 1,
    title: 'Clean Water Access',
    description: 'Providing clean drinking water to communities in need through sustainable infrastructure projects.',
    image: '/images/cause-water.jpg',
    progress: 75,
    raised: 45000,
    goal: 60000
  },
  {
    id: 2,
    title: 'Healthcare Support',
    description: 'Improving healthcare access and medical facilities in underserved areas.',
    image: '/images/cause-health.jpg',
    progress: 60,
    raised: 32000,
    goal: 55000
  },
  {
    id: 3,
    title: 'Education for All',
    description: 'Building schools and providing educational resources to children in rural communities.',
    image: '/images/cause-education.jpg',
    progress: 85,
    raised: 68000,
    goal: 80000
  }
];

const CausesSection: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-5 h-2 bg-yellow-400 rounded"></div>
              <p className="text-gray-600">Our causes</p>
            </div>

            <h2 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight max-w-2xl">
              Various things we help in whole world
            </h2>
          </div>

          <button className="bg-transparent text-gray-900 border border-yellow-400 rounded-full px-6 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-in-out flex items-center space-x-2">
            <span>More causes</span>
            <ArrowRightIcon width={16} height={16} color="currentColor" />
          </button>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <div key={cause.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="relative">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {cause.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cause.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{cause.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${cause.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Goal</p>
                    <p className="font-semibold text-gray-900">${cause.goal?.toLocaleString() || '0'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Raised</p>
                    <p className="font-semibold text-gray-900">${cause.raised?.toLocaleString() || '0'}</p>
                  </div>
                </div>

                <button className="w-full bg-transparent text-gray-900 border border-yellow-400 rounded-full py-2 text-sm font-medium hover:bg-yellow-400 hover:text-white transition-all duration-300 ease-in-out">
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CausesSection;