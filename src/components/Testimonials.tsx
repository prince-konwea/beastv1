import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'Casual Gamer',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    quote: 'Shadow Warriors completely blew me away! The immersive storyline and stunning visuals kept me hooked for hours. Definitely my favorite game of the year!',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Pro Gamer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    quote: 'As a professional gamer, I appreciate the technical excellence and competitive balance in Cyber Drift 2090. Beast Games has set a new standard for racing games.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Game Reviewer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    quote: 'Galactic Frontier offers an incredibly deep strategy experience with endless replayability. The attention to detail and regular updates show how much Beast Games cares about their community.',
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Players Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our community of passionate gamers
          </p>
        </div>
        
        <div className="relative">
          {/* Controls */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <button 
              onClick={prevTestimonial}
              className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial}
              className="bg-gray-900 p-3 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 focus:outline-none"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-600">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl text-white italic mb-8">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="mb-2">
                <p className="text-lg font-bold text-white">{currentTestimonial.name}</p>
                <p className="text-purple-400">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;