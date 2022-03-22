import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router";
import {
  handleDecreaseCart,
  handleIncreaseCart,
  handleRemoveCard,
} from "../HandleCart";
import { ShowQuantity } from "../ShowData";
import "./CartProduct.css";
const CartProduct = ({ product, setTotalCartMoney }) => {
  const { category, name, img, stock, shipping, mainPrice } = product;
  const [cartQty, setCartQty] = useState(1);
  const [stockError, setStockError] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="cart-product">
      <div className="cart-image">
        <img width={"200"} src={img} alt={name} />
      </div>
      <div className="cart-details">
        <div className="inner-details">
          <div className="name-info">
            <h3>{name}</h3>
            <span className="colorize">{category}</span>
          </div>

          <div className="others-info">
            <div className="prices">
              <span className="colorize">
                {mainPrice * ShowQuantity(product.id)}$
              </span>
              <div className="cart-counter">
                <button
                  onClick={() => {
                    handleDecreaseCart(
                      product,
                      mainPrice,
                      setCartQty,
                      cartQty,
                      setStockError,
                      setTotalCartMoney
                    );
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={ShowQuantity(product.id)}
                  readOnly
                />
                <button
                  onClick={() => {
                    handleIncreaseCart(
                      product,
                      mainPrice,
                      setCartQty,
                      cartQty,
                      setStockError,
                      setTotalCartMoney
                    );
                  }}
                >
                  +
                </button>
                {stockError ? <small>Stock Out</small> : ""}
              </div>
            </div>

            <div className="stock">
              <div>
                <span>Stock - </span>
                <b>{stock}</b>
              </div>
              <div>
                <span>Shipping - </span>
                <b>{shipping} $</b>
              </div>
            </div>
          </div>
        </div>
        <div
          className="remove-btn"
          onClick={() => {
            if (window.confirm("Do you want to delete item?")) {
              handleRemoveCard(product.id);
              navigate("/cart");
            }
          }}
        >
          <span>
            <AiFillDelete />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
