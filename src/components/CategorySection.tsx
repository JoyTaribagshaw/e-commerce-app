
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  image: string;
  category: string;
}

const categories: Category[] = [
  {
    name: 'HEADPHONES',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    category: 'headphones'
  },
  {
    name: 'SPEAKERS',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop',
    category: 'speakers'
  },
  {
    name: 'EARPHONES',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop',
    category: 'earphones'
  }
];

interface CategorySectionProps {
  onShowProducts?: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onShowProducts }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-lg p-8 mb-6 transition-all duration-300 group-hover:shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-32 h-32 mx-auto object-cover rounded-full mb-6"
                />
                <h3 className="text-lg font-bold tracking-wider mb-4">{category.name}</h3>
                <Button 
                  variant="ghost" 
                  className="text-gray-600 hover:text-orange-500 font-bold tracking-wider"
                  onClick={() => onShowProducts?.(category.category)}
                >
                  SHOP <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
