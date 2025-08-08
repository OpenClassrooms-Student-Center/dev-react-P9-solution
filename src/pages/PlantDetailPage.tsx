import { useParams, Link, useNavigate } from "react-router-dom";
import { plantList } from "../datas/plantList";
import CareScale from "../components/ui/CareScale";
import type { Plant } from "../types";
import "../styles/PlantDetailPage.css";

interface PlantDetailPageProps {
  addToCart: (plant: Plant) => void;
}

function PlantDetailPage({ addToCart }: PlantDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const plant = plantList.find((p) => p.id === id);

  if (!plant) {
    navigate("/404");
    return null;
  }

  const handleAddToCart = () => {
    addToCart(plant);
  };

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      classique: "Plantes classiques",
      extérieur: "Plantes d'extérieur",
      "plante grasse": "Plantes grasses",
    };
    return labels[category] || category;
  };

  return (
    <div className="plant-detail-page">
      <div className="plant-detail-header">
        <Link to="/" className="back-button">
          ← Retour à la boutique
        </Link>
      </div>

      <div className="plant-detail-content">
        <div className="plant-detail-image">
          <img src={plant.cover} alt={plant.name} />
        </div>

        <div className="plant-detail-info">
          <div className="plant-detail-header-info">
            <h2>{plant.name}</h2>
            <div className="plant-price">{plant.price}€</div>
          </div>

          <div className="plant-category">
            <span className="category-label">Catégorie :</span>
            <span className="category-value">
              {getCategoryLabel(plant.category)}
            </span>
          </div>

          <div className="plant-care">
            <h3>Soins recommandés</h3>
            <div className="care-scales">
              <div className="care-scale-item">
                <span className="care-label">Lumière :</span>
                <CareScale scaleValue={plant.light} careType="light" />
              </div>
              <div className="care-scale-item">
                <span className="care-label">Arrosage :</span>
                <CareScale scaleValue={plant.water} careType="water" />
              </div>
            </div>
          </div>

          <div className="plant-description">
            <h3>Description</h3>
            <p>{plant.description}</p>
          </div>

          <div className="plant-actions">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Ajouter au panier
            </button>
            <Link to="/cart" className="view-cart-btn">
              Voir le panier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantDetailPage;
