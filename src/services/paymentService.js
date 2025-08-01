export class PaymentService {
  static async processPayment(paymentData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulation d'un paiement réussi ou refusé
    const isSuccess = Math.random() > 0.2;

    if (isSuccess) {
      return {
        success: true,
        transactionId: `txn_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        amount: paymentData.amount,
        currency: "EUR",
        status: "succeeded",
        timestamp: new Date().toISOString(),
      };
    } else {
      throw new Error(
        "Paiement refusé. Veuillez vérifier vos informations de paiement."
      );
    }
  }

  static async validatePaymentMethod(paymentMethod) {
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
