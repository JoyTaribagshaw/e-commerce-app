
import React from 'react';
import { Check, Package, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { OrderSummary } from '../types';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderSummary: OrderSummary;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  isOpen,
  onClose,
  orderSummary,
}) => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Order Confirmed!</DialogTitle>
        </DialogHeader>
        
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Thank you for your order!</h3>
          <p className="text-gray-600 mb-2">
            Your order has been confirmed and will be shipped soon.
          </p>
          <p className="text-lg font-semibold text-orange-500 mb-6">
            Order #{orderNumber}
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-8 text-sm text-gray-600">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                <Package className="w-5 h-5 text-orange-600" />
              </div>
              <span>Processing</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Truck className="w-5 h-5 text-gray-400" />
              </div>
              <span>Shipping</span>
            </div>
          </div>
          
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {orderSummary.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${orderSummary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">VAT (20%)</span>
                  <span className="font-semibold">${orderSummary.vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span className="text-orange-500">${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            onClick={onClose} 
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-bold transform hover:scale-105 transition-all duration-200"
          >
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderConfirmation;
