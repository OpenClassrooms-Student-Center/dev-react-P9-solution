import { usePayment } from "../hooks/usePayment";
import { usePaymentForm } from "../hooks/usePaymentForm";
import type { PaymentResponse } from "../types";
import "../styles/PaymentForm.css";

interface PaymentFormProps {
  amount: number;
  onSuccess: (result: PaymentResponse) => void;
  onCancel: () => void;
}

function PaymentForm({ amount, onSuccess, onCancel }: PaymentFormProps) {
  const { isLoading, error, processPayment } = usePayment();
  const { formData, errors, handleInputChange, validateForm } =
    usePaymentForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation du formulaire
    if (!validateForm()) {
      return;
    }

    try {
      // Appel au service de paiement
      const result = await processPayment(formData);
      onSuccess(result);
    } catch (err) {
      // L'erreur est déjà gérée par le hook usePayment
      console.error("Erreur de paiement:", err);
    }
  };

  const formatCardNumber = (value: string): string => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string): string => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="payment-form-overlay">
      <div className="payment-form">
        <div className="payment-form-header">
          <h2>Paiement sécurisé</h2>
          <button onClick={onCancel} className="close-btn">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="Jean"
              required
            />
            {errors.firstName && (
              <span className="field-error">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Dupont"
              required
            />
            {errors.lastName && (
              <span className="field-error">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="jean.dupont@email.com"
              required
            />
            {errors.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="123 Rue de la Paix"
              required
            />
            {errors.address && (
              <span className="field-error">{errors.address}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="Paris"
                required
              />
              {errors.city && (
                <span className="field-error">{errors.city}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">Code postal</label>
              <input
                type="text"
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                placeholder="75001"
                required
              />
              {errors.zipCode && (
                <span className="field-error">{errors.zipCode}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Numéro de carte</label>
            <input
              type="text"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={(e) =>
                handleInputChange(
                  "cardNumber",
                  formatCardNumber(e.target.value)
                )
              }
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
            {errors.cardNumber && (
              <span className="field-error">{errors.cardNumber}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Date d'expiration</label>
              <input
                type="text"
                id="expiryDate"
                value={formData.expiryDate}
                onChange={(e) =>
                  handleInputChange(
                    "expiryDate",
                    formatExpiryDate(e.target.value)
                  )
                }
                placeholder="MM/AA"
                maxLength={5}
                required
              />
              {errors.expiryDate && (
                <span className="field-error">{errors.expiryDate}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="cvv">Code de sécurité</label>
              <input
                type="text"
                id="cvv"
                value={formData.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
                placeholder="123"
                maxLength={4}
                required
              />
              {errors.cvv && <span className="field-error">{errors.cvv}</span>}
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="payment-summary">
            <div className="amount-display">
              <span>Montant total:</span>
              <span className="amount">{amount}€</span>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onCancel}
              className="cancel-btn"
              disabled={isLoading}
            >
              Annuler
            </button>
            <button type="submit" className="pay-btn" disabled={isLoading}>
              {isLoading ? "Traitement..." : `Payer ${amount}€`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
