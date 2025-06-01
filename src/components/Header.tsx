import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import beastIcon from '../assets/beast_games.png'; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={beastIcon} alt="Beast Games Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
            <a href="#faq" className="text-white hover:text-yellow-400 transition-colors">FAQ</a>
            <Link to="/apply" className="px-6 py-2 text-black bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors">
              Apply
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#faq" className="text-white hover:text-yellow-400 transition-colors">FAQ</a>
              <Link to="/apply" className="px-6 py-2 text-black bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors">
                Apply
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;