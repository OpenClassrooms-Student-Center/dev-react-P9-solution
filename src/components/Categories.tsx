import "../styles/Categories.css";

interface CategoriesProps {
  setActiveCategory: (category: string) => void;
  categories: string[];
  activeCategory: string;
}

function Categories({
  setActiveCategory,
  categories,
  activeCategory,
}: CategoriesProps) {
  return (
    <div className="lmj-categories">
      <div className="lmj-categories-tags">
        <button
          className={`lmj-category-tag ${
            activeCategory === "" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("")}
        >
          Toutes
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`lmj-category-tag ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
