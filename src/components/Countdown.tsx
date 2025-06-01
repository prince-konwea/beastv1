import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { Bell } from 'lucide-react';

const CountdownComponent = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set deadline to May 1, 2026
  const deadline = new Date('2026-05-01T00:00:00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Time is Running Out
          </h2>
          
          {/* Countdown Timer */}
          <Countdown 
            date={deadline}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{days}</div>
                  <div className="text-gray-400">Days</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{hours}</div>
                  <div className="text-gray-400">Hours</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{minutes}</div>
                  <div className="text-gray-400">Minutes</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{seconds}</div>
                  <div className="text-gray-400">Seconds</div>
                </div>
              </div>
            )}
          />

          {/* Email Subscription */}
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Get Notified</h3>
            {isSubscribed ? (
              <div className="text-green-400 flex items-center justify-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>You're all set! We'll notify you about important updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 rounded-full bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 text-black bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors duration-300 font-bold"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownComponent;