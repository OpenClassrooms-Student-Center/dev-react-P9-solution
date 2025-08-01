import { Link } from "react-router-dom";
import type { CartItem } from "../../types";
import "../../styles/Banner.css";
import logo from "../../assets/logo.png";

interface BannerProps {
  cart: CartItem[];
}

function Banner({ cart }: BannerProps) {
  const totalItems = cart
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  return (
    <div className="lmj-banner">
      <div className="lmj-banner-content">
        <Link to="/" className="lmj-banner-content-left">
          <img src={logo} alt="logo-la-maison-jungle" className="lmj-logo" />
          <h1 className="lmj-title">La maison jungle</h1>
        </Link>
        <Link to="/cart" className="lmj-cart-badge">
          <svg
            className="lmj-cart-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span className="lmj-cart-text">Panier</span>
          {totalItems > 0 && (
            <span className="lmj-cart-count-badge">{totalItems}</span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Banner;
