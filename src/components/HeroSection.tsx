
import React from 'react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-orange-500 tracking-[0.5em] text-sm font-medium mb-6">NEW PRODUCT</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              XX99 MARK II<br />HEADPHONES
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-sm font-bold tracking-wider">
              SEE PRODUCT
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
              alt="XX99 Mark II Headphones"
              className="max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
