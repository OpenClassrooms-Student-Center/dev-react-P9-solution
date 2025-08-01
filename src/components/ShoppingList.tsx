import { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./ui/PlantItem";
import Categories from "./Categories";
import type { Plant } from "../types";
import "../styles/ShoppingList.css";

interface ShoppingListProps {
  addToCart: (plant: Plant) => void;
}

function ShoppingList({ addToCart }: ShoppingListProps) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [] as string[]
  );

  const handleAddToCart = (plant: Plant) => {
    addToCart(plant);
  };

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(
          ({ id, cover, name, water, light, price, category, bestSale }) =>
            !activeCategory || activeCategory === category ? (
              <li key={id}>
                <PlantItem
                  id={id}
                  cover={cover}
                  name={name}
                  price={price}
                  bestSale={bestSale}
                  onAddToCart={() =>
                    handleAddToCart({
                      id,
                      cover,
                      name,
                      water,
                      light,
                      price,
                      category,
                      bestSale,
                    })
                  }
                />
              </li>
            ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
