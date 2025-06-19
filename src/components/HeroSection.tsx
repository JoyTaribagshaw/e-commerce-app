
import React from 'react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative text-white py-20 lg:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <p className="text-orange-500 tracking-[0.5em] text-sm font-medium mb-6">NEW PRODUCT</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            XX99 MARK II<br />HEADPHONES
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-sm font-bold tracking-wider">
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
