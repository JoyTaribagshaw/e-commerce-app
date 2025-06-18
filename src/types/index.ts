export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
  new?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  items: CartItem[];
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
