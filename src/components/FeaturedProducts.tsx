
import React from 'react';
import { Button } from './ui/button';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ZX9 Speaker */}
        <div className="bg-orange-500 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-16">
              <img
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
                alt="ZX9 Speaker"
                className="w-48 h-48 mx-auto lg:mx-0 object-cover rounded-full"
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
        <div className="bg-gray-100 rounded-lg p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">ZX7 SPEAKER</h2>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-6 font-bold tracking-wider">
                SEE PRODUCT
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop"
                alt="ZX7 Speaker"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* YX1 Earphones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=300&fit=crop"
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
