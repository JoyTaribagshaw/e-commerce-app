
import React from 'react';
import { Button } from './ui/button';
import zx9SpeakerImage from '@/assets/image-speaker-zx9.png';
import zx7SpeakerImage from '@/assets/image-speaker-zx7.jpg';
import yx1EarphonesImage from '@/assets/image-earphones-yx1.jpg';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ZX9 Speaker */}
        <div className="bg-orange-500 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-16">
              <img
                src={zx9SpeakerImage}
                alt="ZX9 Speaker"
                className="w-64 h-auto mx-auto lg:mx-0"
              />
            </div>
            <div className="p-12 lg:p-16 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ZX9<br />SPEAKER
              </h2>
              <p className="text-white/80 mb-8 max-w-md">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 font-bold tracking-wider">
                SEE PRODUCT
              </Button>
            </div>
          </div>
        </div>

        {/* ZX7 Speaker */}
        <div
          className="relative rounded-lg p-12 lg:p-24 bg-cover bg-center"
          style={{ backgroundImage: `url(${zx7SpeakerImage})` }}
        >
            <div>
              <h2 className="text-3xl font-bold mb-8">ZX7 SPEAKER</h2>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-6 font-bold tracking-wider">
                SEE PRODUCT
              </Button>
            </div>
        </div>

        {/* YX1 Earphones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-8">
            <img
              src={yx1EarphonesImage}
              alt="YX1 Earphones"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">YX1 EARPHONES</h2>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-6 font-bold tracking-wider w-fit">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
