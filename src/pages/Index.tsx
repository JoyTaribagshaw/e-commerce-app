
import React, { useState } from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import OrderConfirmation from '../components/OrderConfirmation';
import { Product, OrderSummary } from '../types';
import productsData from '../data/products.json';

type View = 'home' | 'products' | 'checkout';

const Index = () => {
  const [products] = useState<Product[]>(productsData);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const handleCheckout = () => {
    setCurrentView('checkout');
  };

  const handleOrderComplete = (summary: OrderSummary) => {
    setOrderSummary(summary);
    setShowOrderConfirmation(true);
    setCurrentView('home');
  };

  const handleOrderConfirmationClose = () => {
    setShowOrderConfirmation(false);
    setOrderSummary(null);
  };

  const showProducts = (category?: string) => {
    setSelectedCategory(category);
    setCurrentView('products');
  };

  const getCategoryTitle = () => {
    if (!selectedCategory) return 'All Products';
    return selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header onShowProducts={showProducts} />
        
        {currentView === 'home' && (
          <>
            <HeroSection />
            <CategorySection onShowProducts={showProducts} />
            <FeaturedProducts />
            <AboutSection />
            <Footer />
          </>
        )}
        
        {currentView === 'products' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <button
                onClick={() => setCurrentView('home')}
                className="text-orange-500 hover:text-orange-600 mb-4 flex items-center gap-2 font-semibold transform hover:scale-105 transition-all duration-200"
              >
                ← Back to Home
              </button>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{getCategoryTitle()}</h1>
              <p className="text-gray-600">
                {selectedCategory 
                  ? `Discover our premium ${selectedCategory} collection`
                  : 'Discover our complete range of premium audio equipment'
                }
              </p>
            </div>
            
            <ProductGrid products={products} category={selectedCategory} />
          </main>
        )}
        
        {currentView === 'checkout' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <button
                onClick={() => setCurrentView('products')}
                className="text-orange-500 hover:text-orange-600 mb-4 flex items-center gap-2 font-semibold transform hover:scale-105 transition-all duration-200"
              >
                ← Back to Products
              </button>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
              <p className="text-gray-600">Complete your order and enjoy premium audio</p>
            </div>
            
            <Checkout onOrderComplete={handleOrderComplete} />
          </main>
        )}
        
        <Cart onCheckout={handleCheckout} />
        
        {orderSummary && (
          <OrderConfirmation
            isOpen={showOrderConfirmation}
            onClose={handleOrderConfirmationClose}
            orderSummary={orderSummary}
          />
        )}
      </div>
    </CartProvider>
  );
};

export default Index;
