import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "./Product.css";
const Product = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          width={"200"}
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2e8a6f09838d49c3b00fad4f0017f753_9366/Alliance_Sackpack_White_FZ6823_01_standard.jpg"
          alt=""
        />
      </div>
      <div className="details">
        <h4>Product</h4>
        <span>$1000</span>
        <div className="inner-details">
          <span>Brand</span>
          <div>
            <div className="stars">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <span>4</span>
            <small>(200)</small>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
