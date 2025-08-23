'use client';

import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const teamMembers = [
  {
    id: 1,
    name: 'Ivan Petrov',
    role: 'Founder & CEO',
    image: '/images/team-ivan.jpg',
    bio: 'Passionate about making a difference in communities worldwide.'
  },
  {
    id: 2,
    name: 'Denis Kovalenko',
    role: 'Operations Director',
    image: '/images/team-denis.jpg',
    bio: 'Expert in managing humanitarian projects and team coordination.'
  },
  {
    id: 3,
    name: 'Dmytro Shevchenko',
    role: 'Program Manager',
    image: '/images/team-dmytro.jpg',
    bio: 'Specialized in educational and healthcare program development.'
  }
];

const TeamSection: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-5 h-2 bg-yellow-400 rounded"></div>
              <p className="text-gray-600">Our team</p>
            </div>

            <h2 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight max-w-2xl">
              Meet our amazing team
            </h2>
          </div>

          <button className="bg-transparent text-gray-900 border border-yellow-400 rounded-full px-6 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-in-out flex items-center space-x-2">
            <span>Explore team</span>
            <ArrowRightIcon width={16} height={16} color="currentColor" />
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pb-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-white/80 mb-3">{member.role}</p>
                  <p className="text-white/90 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 text-center">
          <div className="text-7xl md:text-9xl font-semibold leading-none tracking-tighter mb-4 bg-gradient-to-br from-cyan-400 to-green-400 bg-clip-text text-transparent">
            15+
          </div>
          <p className="text-xl font-medium text-gray-600">
            Years of experience in charity work
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;