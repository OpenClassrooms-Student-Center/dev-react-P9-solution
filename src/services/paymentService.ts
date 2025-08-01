import type { PaymentFormData, PaymentResponse } from "../types";

export class PaymentService {
  static async processPayment(
    _paymentData: PaymentFormData
  ): Promise<PaymentResponse> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulation d'un paiement réussi ou refusé
    const isSuccess = Math.random() > 0.2;

    if (isSuccess) {
      return {
        success: true,
        message: "Paiement traité avec succès",
        transactionId: `txn_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
      };
    } else {
      throw new Error(
        "Paiement refusé. Veuillez vérifier vos informations de paiement."
      );
    }
  }

  static async validatePaymentMethod(paymentMethod: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }): Promise<{ valid: boolean }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const isValid =
      paymentMethod.cardNumber &&
      paymentMethod.cardNumber.length >= 13 &&
      paymentMethod.expiryDate &&
      paymentMethod.cvv &&
      paymentMethod.cvv.length >= 3;

    if (!isValid) {
      throw new Error("Informations de paiement invalides");
    }

    return { valid: true };
  }
}
