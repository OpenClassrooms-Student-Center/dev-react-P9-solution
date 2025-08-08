import { Link } from "react-router-dom";
import { useState } from "react";

import "../../styles/PlantItem.css";

interface PlantItemProps {
  cover: string;
  name: string;
  price: number;
  id: string;
  onAddToCart: () => void;
}

function PlantItem({ cover, name, price, id, onAddToCart }: PlantItemProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onAddToCart();
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };

  return (
    <div className="lmj-plant-item-card">
      <Link to={`/plant/${id}`} className="lmj-plant-item-link">
        <img
          src={cover}
          alt={`${name} cover`}
          className="lmj-plant-item-cover"
        />
      </Link>
      <div className="lmj-plant-item-content">
        <div className="lmj-plant-item-header">
          <h3 className="lmj-plant-item-name">{name}</h3>
          <span className="lmj-plant-item-price">{price}€</span>
        </div>
        <button className="lmj-plant-item-add-btn" onClick={handleAddToCart}>
          Ajouter
        </button>
      </div>

      {showAnimation && (
        <div className="lmj-add-animation">
          <svg
            className="lmj-check-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default PlantItem;
