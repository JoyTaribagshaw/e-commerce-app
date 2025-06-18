
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onViewProduct?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onClick={onViewProduct}
        />
      </div>
      
      <div className="p-6">
        {(product.new || product.featured) && (
          <div className="flex gap-2 mb-3">
            {product.new && (
              <span className="bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                NEW
              </span>
            )}
            {product.featured && (
              <span className="bg-gray-800 text-white px-3 py-1 text-xs font-semibold rounded-full">
                FEATURED
              </span>
            )}
          </div>
        )}
        
        <h3 
          className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors cursor-pointer line-clamp-2"
          onClick={onViewProduct}
        >
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
