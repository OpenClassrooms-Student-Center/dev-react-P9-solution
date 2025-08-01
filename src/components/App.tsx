import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import Banner from "./layout/Banner";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import PlantDetailPage from "../pages/PlantDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  const { cart, addToCart, updateQuantity, clearCart } = useCart();

  return (
    <Router>
      <div>
        <Banner cart={cart} />

        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                clearCart={clearCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route
            path="/plant/:id"
            element={<PlantDetailPage addToCart={addToCart} />}
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
