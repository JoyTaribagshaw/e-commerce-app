
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-wider mb-8">audiophile</h2>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
            </p>
          </div>
          
          <div className="flex flex-col lg:items-end">
            <nav className="mb-8">
              <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                <li><a href="#" className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm">HOME</a></li>
                <li><a href="#" className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm">HEADPHONES</a></li>
                <li><a href="#" className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm">SPEAKERS</a></li>
                <li><a href="#" className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm">EARPHONES</a></li>
              </ul>
            </nav>
            
            <p className="text-gray-400 text-sm">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
