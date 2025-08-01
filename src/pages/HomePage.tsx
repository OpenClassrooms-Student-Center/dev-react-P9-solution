import Footer from "../components/layout/Footer";
import ShoppingList from "../components/ShoppingList";
import type { Plant } from "../types";
import "../styles/Layout.css";

interface HomePageProps {
  addToCart: (plant: Plant) => void;
}

function HomePage({ addToCart }: HomePageProps) {
  return (
    <div>
      <div className="lmj-layout-inner">
        <ShoppingList addToCart={addToCart} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
