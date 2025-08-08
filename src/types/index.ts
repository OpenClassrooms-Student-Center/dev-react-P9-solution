export interface Plant {
  id: string;
  name: string;
  category: string;
  light: number;
  water: number;
  cover: string;
  price: number;
  description: string;
}

export interface CartItem extends Plant {
  quantity: number;
}

export interface PaymentFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  transactionId?: string;
}

export interface UseCartReturn {
  cart: CartItem[];
  addToCart: (plant: Plant) => void;
  removeFromCart: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export interface UsePaymentFormReturn {
  formData: PaymentFormData;
  errors: Partial<PaymentFormData>;
  isLoading: boolean;
  handleInputChange: (field: keyof PaymentFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  validateForm: () => boolean;
}

export interface UsePaymentReturn {
  isLoading: boolean;
  error: string | null;
  processPayment: (formData: PaymentFormData) => Promise<PaymentResponse>;
}
