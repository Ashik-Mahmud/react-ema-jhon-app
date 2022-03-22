import React, { useEffect, useState } from "react";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import Product from "./Product/Product";
import "./Shops.css";
const Shops = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
    );
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <section id="shops">
        <div className="container p-md">
          <div className="title">
            <h2>Shops</h2>
            <p>Here You will get of yours dream products</p>
          </div>
          <div className="shops-content">
            <aside className="filter-sidebar">
              <FilterSidebar />
            </aside>
            <div className="products-content">
              {products.slice(0, 30).map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shops;
