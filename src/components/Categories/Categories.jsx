import CategoryItem from "./CategoryItem";
import "./Categories.css";
import { useState } from "react";
import productsData from "../../data.json";

const Categories = () => {
  const [categories] = useState(productsData["categories"]);

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Kategoriler</h2>
          <p></p>
        </div>
        <ul className="category-list">
        {categories.map((category) => (
              <CategoryItem categoryItem={category} key={category.id} />
            ))}
          
        </ul>
      </div>
    </section>
  );
};

export default Categories;