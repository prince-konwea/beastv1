import React from 'react';
import { Video, User, Plane, Check } from 'lucide-react';

const requirements = [
  { text: 'Age 18+' },
  { text: 'Valid passport' },
  { text: 'U.S. residency or visa' }
];

const steps = [
  {
    icon: Video,
    title: 'Submit a 1-minute video',
    description: 'Show us what makes you unique and entertaining'
  },
  {
    icon: User,
    title: 'Show your personality',
    description: 'Tell us why you want to compete'
  },
  {
    icon: Plane,
    title: 'Be ready for adventure',
    description: 'Available for travel May–July 2025'
  }
];

const HowToApply = () => {
  return (
    <section id="application" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Think You've Got What It Takes?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your chance to make history and compete for $5 million
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-black p-8 rounded-2xl hover:bg-gray-800 transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <step.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-black p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold mb-6">Requirements</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-yellow-400" />
                </div>
                <span className="text-gray-300">{req.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 text-xl font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Apply for Season 2
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;