import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./CartProduct.css";
const CartProduct = () => {
  return (
    <div className="cart-product">
      <div className="cart-image">
        <img
          width={"200"}
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2e8a6f09838d49c3b00fad4f0017f753_9366/Alliance_Sackpack_White_FZ6823_01_standard.jpg"
          alt=""
        />
      </div>
      <div className="cart-details">
        <div className="inner-details">
          <div className="name-info">
            <h3>product name</h3>
            <span className="colorize">Category</span>
          </div>

          <div className="others-info">
            <div className="prices">
              <span className="colorize">1500$</span>
              <div className="cart-counter">
                <button>-</button>
                <input type="number" value={"1"} readOnly />
                <button>+</button>
              </div>
            </div>

            <div className="stock">
              <div>
                <span>Stock - </span>
                <b>19</b>
              </div>
            </div>
          </div>
        </div>
        <div className="remove-btn">
          <span>
            <AiFillDelete />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
