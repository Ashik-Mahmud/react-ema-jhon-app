import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import Product from "./Product/Product";
import "./Shops.css";
const Shops = () => {
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadProducts = async () => {
    const response = await fetch(`./products.json`);
    const data = await response.json();
    setProducts(data);
    setSearchedProduct(data);
    setLoading(true);
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
              <FilterSidebar
                products={products}
                setSearchedProduct={setSearchedProduct}
              />
            </aside>
            {loading ? (
              <div className="products-content">
                {searchedProduct.length > 0 ? (
                  searchedProduct
                    .slice(0, 30)
                    .map((product) => (
                      <Product key={product.id} product={product} />
                    ))
                ) : (
                  <img
                    className="empty-image"
                    src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
                    alt="nothing"
                  />
                )}
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shops;
