import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToApply from './components/HowToApply';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <HowToApply />
      <Countdown />
      <Footer />
    </div>
  );
}

export default App