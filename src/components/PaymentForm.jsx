import { usePayment } from '../hooks/usePayment'
import { usePaymentForm } from '../hooks/usePaymentForm'
import '../styles/PaymentForm.css'

function PaymentForm({ amount, onSuccess, onCancel }) {
  const { isProcessing, error, processPayment } = usePayment()
  const { 
    formData, 
    errors, 
    updateField, 
    validateForm, 
    formatCardNumber, 
    formatExpiryDate,
    resetForm 
  } = usePaymentForm()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateField(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation du formulaire
    if (!validateForm()) {
      return
    }

    try {
      // Appel au service de paiement
      const paymentData = {
        amount: amount,
        cardNumber: formData.cardNumber.replace(/\s/g, ''),
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        cardholderName: formData.cardholderName
      }

      const result = await processPayment(paymentData)
      onSuccess(result)
    } catch (err) {
      // L'erreur est déjà gérée par le hook usePayment
      console.error('Erreur de paiement:', err)
    }
  }

  return (
    <div className="payment-form-overlay">
      <div className="payment-form">
        <div className="payment-form-header">
          <h2>Paiement sécurisé</h2>
          <button onClick={onCancel} className="close-btn">×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Numéro de carte</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={(e) => updateField('cardNumber', formatCardNumber(e.target.value))}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
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
                name="expiryDate"
                value={formData.expiryDate}
                onChange={(e) => updateField('expiryDate', formatExpiryDate(e.target.value))}
                placeholder="MM/AA"
                maxLength="5"
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
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength="4"
                required
              />
              {errors.cvv && (
                <span className="field-error">{errors.cvv}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cardholderName">Nom du titulaire</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              placeholder="Jean Dupont"
              required
            />
            {errors.cardholderName && (
              <span className="field-error">{errors.cardholderName}</span>
            )}
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

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
              disabled={isProcessing}
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="pay-btn"
              disabled={isProcessing}
            >
              {isProcessing ? 'Traitement...' : `Payer ${amount}€`}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentForm 