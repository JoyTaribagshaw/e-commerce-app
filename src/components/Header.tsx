
import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

interface HeaderProps {
  onShowProducts?: (category?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onShowProducts }) => {
  const { toggleCart, getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" className="text-white hover:text-orange-500">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold tracking-wider hover:text-orange-500 transition-colors cursor-pointer">
              audiophile
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm">
              HOME
            </a>
            <button 
              onClick={() => onShowProducts?.('headphones')}
              className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm"
            >
              HEADPHONES
            </button>
            <button 
              onClick={() => onShowProducts?.('speakers')}
              className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm"
            >
              SPEAKERS
            </button>
            <button 
              onClick={() => onShowProducts?.('earphones')}
              className="text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm"
            >
              EARPHONES
            </button>
          </nav>
          
          {/* Cart Button */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCart}
              className="relative text-white hover:text-orange-500 hover:bg-gray-800 transition-all duration-200 transform hover:scale-110"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="lg:hidden border-t border-gray-800">
        <nav className="px-4 py-4 space-y-2">
          <a href="#" className="block text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm py-2">
            HOME
          </a>
          <button 
            onClick={() => onShowProducts?.('headphones')}
            className="block text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm py-2 w-full text-left"
          >
            HEADPHONES
          </button>
          <button 
            onClick={() => onShowProducts?.('speakers')}
            className="block text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm py-2 w-full text-left"
          >
            SPEAKERS
          </button>
          <button 
            onClick={() => onShowProducts?.('earphones')}
            className="block text-white hover:text-orange-500 transition-colors font-bold tracking-wider text-sm py-2 w-full text-left"
          >
            EARPHONES
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
