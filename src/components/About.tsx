import React from 'react';

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
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uyiG6uw-6pA?si=rgQSf8QRdKm5qOan"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;