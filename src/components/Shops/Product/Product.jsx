import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { StorageItem } from "../../LocalStorage/Storage";
import "./Product.css";
const Product = ({ product, addToCartProduct, setCartCount, cartCount }) => {
  const { id, name, img, seller, price, ratings, ratingsCount } = product;

  /* dynamic star icon */
  let stars = [];
  for (let i = 0; i < ratings; i++) {
    stars.push(i);
  }

  /* get items from localStorage */
  const items = StorageItem();
  setCartCount(items.length);
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
        <button
          className={items
            .map((item) => (item.id === id ? "disabled " : " "))
            .join("")}
          onClick={(e) => {
            addToCartProduct(product);
            e.target.classList.add("disabled");
            setCartCount(cartCount + 1);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
