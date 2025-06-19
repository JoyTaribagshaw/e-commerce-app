
import React from 'react';
import aboutImage from '@/assets/image-gallery-1.jpg';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              BRINGING YOU THE<br />
              <span className="text-orange-500">BEST</span> AUDIO GEAR
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <img
              src={aboutImage}
              alt="Person using headphones"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
