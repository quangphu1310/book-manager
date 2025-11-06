import { CartItem } from "./cart.model";

export interface CheckoutForm {
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    district: string;
    ward: string;
    zipCode: string;
  };
  paymentMethod: 'cod' | 'bank' | 'credit';
  note?: string;
}

export interface Order {
  id: string;
  orderDate: Date;
  items: CartItem[];
  totalAmount: number;
  customerInfo: CheckoutForm['customerInfo'];
  shippingAddress: CheckoutForm['shippingAddress'];
  paymentMethod: CheckoutForm['paymentMethod'];
  note?: string;
  status: 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';
}
