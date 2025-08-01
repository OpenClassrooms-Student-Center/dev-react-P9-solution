import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaymentForm from "../components/PaymentForm";
import type { CartItem, PaymentResponse } from "../types";
import "../styles/CartPage.css";

interface CartPageProps {
  cart: CartItem[];
  clearCart: () => void;
  updateQuantity: (plantId: string, quantity: number) => void;
}

function CartPage({ cart, clearCart, updateQuantity }: CartPageProps) {
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.quantity * plantType.price,
    0
  );
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentResult, setPaymentResult] = useState<PaymentResponse | null>(
    null
  );

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  return (
    <>
      <div className="cart-page">
        <div className="cart-page-header">
          <Link to="/" className="back-button">
            ← Retour à la boutique
          </Link>
          <h1>Mon Panier</h1>
        </div>

        <div className="cart-page-content">
          {cart.length > 0 ? (
            <>
              <div className="cart-items">
                {cart.map(({ id, name, price, quantity }, index) => (
                  <div key={`${id}-${index}`} className="cart-item">
                    <div className="cart-item-info">
                      <h3>{name}</h3>
                      <p className="cart-item-price">{price}€</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(id, quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(id, quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <p className="cart-item-total">{price * quantity}€</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-total">
                  <h2>Total: {total}€</h2>
                </div>
                <div className="cart-actions">
                  <button onClick={clearCart} className="clear-cart-btn">
                    Vider le panier
                  </button>
                  <button
                    className="checkout-btn"
                    onClick={() => setShowPaymentForm(true)}
                  >
                    Commander
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h2>Votre panier est vide</h2>
              <p>Découvrez nos plantes et ajoutez-les à votre panier !</p>
              <Link to="/" className="shop-button">
                Voir les plantes
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Formulaire de paiement */}
      {showPaymentForm && (
        <PaymentForm
          amount={total}
          onSuccess={(result) => {
            setPaymentResult(result);
            setShowPaymentForm(false);
            clearCart(); // Vider le panier après paiement réussi
          }}
          onCancel={() => setShowPaymentForm(false)}
        />
      )}

      {/* Modal de confirmation de paiement */}
      {paymentResult && (
        <div className="payment-success-overlay">
          <div className="payment-success-modal">
            <div className="success-icon">✅</div>
            <h2>Paiement réussi !</h2>
            <p>Votre commande a été traitée avec succès.</p>
            <div className="transaction-details">
              <p>
                <strong>Transaction ID:</strong> {paymentResult.transactionId}
              </p>
              <p>
                <strong>Message:</strong> {paymentResult.message}
              </p>
            </div>
            <button
              onClick={() => setPaymentResult(null)}
              className="success-close-btn"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
