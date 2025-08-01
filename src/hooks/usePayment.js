import { useState } from "react";
import { PaymentService } from "../services/paymentService";

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [transactionResult, setTransactionResult] = useState(null);

  const processPayment = async (paymentData) => {
    setIsProcessing(true);
    setError(null);
    setSuccess(false);
    setTransactionResult(null);

    try {
      const result = await PaymentService.processPayment(paymentData);
      setSuccess(true);
      setTransactionResult(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPayment = () => {
    setError(null);
    setSuccess(false);
    setTransactionResult(null);
  };

  return {
    isProcessing,
    error,
    success,
    transactionResult,
    processPayment,
    resetPayment,
  };
};
