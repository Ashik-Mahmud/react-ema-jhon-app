import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";
const Cart = () => {
  return (
    <section id="cart">
      <div className="container p-md">
        <div className="title">
          <h2>Cart</h2>
          <p>Here you will get your all cart products</p>
        </div>
        <div className="cart-content">
          <div className="cart-products">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          <div className="cart-summery">
            <h3>Order Summery</h3>
            <table>
              <tbody>
                <tr>
                  <td>Selected Items</td>
                  <th>7</th>
                </tr>
                <tr>
                  <td>Total Prices</td>
                  <th>45454$</th>
                </tr>
                <tr>
                  <td>Shipping Charge</td>
                  <th>5$</th>
                </tr>
                <tr>
                  <td>Total Tax (5%)</td>
                  <th>155$</th>
                </tr>
                <tr>
                  <th>Grand Total</th>
                  <th>10055$</th>
                </tr>
              </tbody>
            </table>
            <div className="cart-buttons">
              <button>
                Proceed Checkout <BsCreditCard2Front />
              </button>
              <button>
                Clear Cart <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
