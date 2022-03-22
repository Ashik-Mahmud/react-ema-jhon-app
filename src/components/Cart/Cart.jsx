import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { useNavigate } from "react-router";
import { StorageItem } from "../LocalStorage/Storage";
import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";
import { shippingCharge, totalCartPrice } from "./ShowData";
const Cart = () => {
  const [totalCartMoney, setTotalCartMoney] = useState(0);
  const navigate = useNavigate();
  const items = StorageItem();

  const realTotalCartsMoney = totalCartMoney
    ? totalCartMoney
    : totalCartPrice();
  const totalTaxMoney = (realTotalCartsMoney * 5) / 100;
  const clearAllCart = () => {
    if (window.confirm("Do you want clear all carts Item?")) {
      localStorage.removeItem("shopping-carts");
      window.location.reload();
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      navigate("/shops");
    }
  }, [navigate, items.length]);

  return (
    <section id="cart">
      <div className="container p-md">
        <div className="title">
          <h2>Cart</h2>
          <p>Here you will get your all cart products</p>
        </div>
        <div className="cart-content">
          <div className="cart-products">
            {items.map((item) => (
              <CartProduct
                key={item.id}
                product={item}
                setTotalCartMoney={setTotalCartMoney}
              />
            ))}
          </div>
          <div className="cart-summery">
            <h3>Order Summery</h3>
            <table>
              <tbody>
                <tr>
                  <td>Selected Items</td>
                  <th>{items.length}</th>
                </tr>
                <tr>
                  <td>Total Prices</td>
                  <th>{realTotalCartsMoney}$</th>
                </tr>
                <tr>
                  <td>Shipping Charge</td>
                  <th>{shippingCharge()}$</th>
                </tr>
                <tr>
                  <td>Total Tax (5%)</td>
                  <th>{totalTaxMoney}$</th>
                </tr>
                <tr>
                  <th>Grand Total</th>
                  <th>{realTotalCartsMoney + totalTaxMoney}$</th>
                </tr>
              </tbody>
            </table>
            <div className="cart-buttons">
              <button>
                Proceed Checkout <BsCreditCard2Front />
              </button>
              <button onClick={clearAllCart}>
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
