import { useState } from "react";
import { PaymentService } from "../services/paymentService";
import type {
  PaymentFormData,
  PaymentResponse,
  UsePaymentReturn,
} from "../types";

export const usePayment = (): UsePaymentReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processPayment = async (
    formData: PaymentFormData
  ): Promise<PaymentResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await PaymentService.processPayment(formData);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Une erreur est survenue";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    processPayment,
  };
};
