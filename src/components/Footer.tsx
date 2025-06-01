import React from 'react';
import { Youtube, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>Copyright © {currentYear} Beast Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;