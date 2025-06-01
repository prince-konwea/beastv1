import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg)',
          opacity: 0.4
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Win <span className="text-yellow-400">$5,000,000</span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
            The Game Starts Now
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Be one of 1,000 players in the world's biggest competition by MrBeast
        </p>
        <Link 
          to="/apply"
          className="inline-flex items-center px-8 py-4 text-xl font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
        >
          Apply Now <ArrowRight className="ml-2 h-6 w-6" />
        </Link>
      </div>

      {/* Animated Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-yellow-400 flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;