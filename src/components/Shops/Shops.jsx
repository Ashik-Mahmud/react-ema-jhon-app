import React from "react";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import Product from "./Product/Product";
import "./Shops.css";
const Shops = () => {
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
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shops;
