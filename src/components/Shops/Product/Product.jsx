import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "./Product.css";
const Product = ({ product }) => {
  const { name, img, seller, price, ratings, ratingsCount } = product;

  /* dynamic star icon */
  let stars = [];
  for (let i = 0; i < ratings; i++) {
    stars.push(i);
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img width={"200"} src={img} alt={name} />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <span>${price}</span>
        <div className="inner-details">
          <span>{seller}</span>
          <div>
            <div className="stars">
              {stars.map((star) => (
                <AiTwotoneStar key={star} />
              ))}
            </div>
            <span>{ratings}</span>
            <small>({ratingsCount})</small>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
