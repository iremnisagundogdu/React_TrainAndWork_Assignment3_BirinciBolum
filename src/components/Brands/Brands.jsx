import BrandItem from "./BrandItem";
import productsData from "../../data.json";
import { useState } from "react";
import "./Brands.css";

const Brands = () => {
  const [brands] = useState(productsData["brands"]);
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
        {brands.map((brand) => (
              <BrandItem brandItem={brand} key={brand.id} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;