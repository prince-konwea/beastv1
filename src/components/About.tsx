import React from 'react';
import { Play } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What is Beast Games?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beast Games is a global reality competition where 1,000 people compete for $5 million. 
            Created by MrBeast, the world's biggest YouTuber.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Play className="h-10 w-10 text-black ml-1" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <img 
            src="https://images.pexels.com/photos/7915567/pexels-photo-7915567.jpeg" 
            alt="Beast Games Competition" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;