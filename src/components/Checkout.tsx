
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckoutForm, OrderSummary } from '../types';
import { useToast } from '@/hooks/use-toast';

const checkoutSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last name is required').min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().min(1, 'Address is required').min(5, 'Please enter a complete address'),
  city: z.string().min(1, 'City is required').min(2, 'City must be at least 2 characters'),
  postalCode: z.string().min(1, 'Postal code is required').regex(/^[A-Za-z0-9\s-]{3,10}$/, 'Please enter a valid postal code'),
  country: z.string().min(1, 'Country is required').min(2, 'Country must be at least 2 characters'),
});

interface CheckoutProps {
  onOrderComplete: (orderSummary: OrderSummary) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onOrderComplete }) => {
  const { state, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  const subtotal = getCartTotal();
  const shipping = 50;
  const vat = subtotal * 0.2; // 20% VAT on product total (excluding shipping)
  const total = subtotal + shipping + vat;

  const onSubmit = async (data: CheckoutForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with validation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderSummary: OrderSummary = {
        subtotal,
        shipping,
        vat,
        total,
        items: state.items,
      };
      
      toast({
        title: "Order Placed Successfully!",
        description: "Your order has been confirmed and will be processed shortly.",
      });
      
      clearCart();
      reset();
      onOrderComplete(orderSummary);
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Add some products to proceed with checkout.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Shipping Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-semibold">First Name *</Label>
                <Input
                  id="firstName"
                  {...register('firstName')}
                  className={`mt-1 ${errors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-semibold">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register('lastName')}
                  className={`mt-1 ${errors.lastName ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={`mt-1 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="address" className="text-sm font-semibold">Street Address *</Label>
              <Input
                id="address"
                {...register('address')}
                className={`mt-1 ${errors.address ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder="Enter your complete address"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-sm font-semibold">City *</Label>
                <Input
                  id="city"
                  {...register('city')}
                  className={`mt-1 ${errors.city ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Enter your city"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="postalCode" className="text-sm font-semibold">Postal Code *</Label>
                <Input
                  id="postalCode"
                  {...register('postalCode')}
                  className={`mt-1 ${errors.postalCode ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Enter postal code"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="country" className="text-sm font-semibold">Country *</Label>
              <Input
                id="country"
                {...register('country')}
                className={`mt-1 ${errors.country ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder="Enter your country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.country.message}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-bold transform hover:scale-105 transition-all duration-200" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Order...
                </div>
              ) : (
                `Complete Order - $${total.toFixed(2)}`
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">VAT (20%)</span>
                <span className="font-semibold">${vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl pt-3 border-t border-gray-200">
                <span>Total</span>
                <span className="text-orange-500">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
