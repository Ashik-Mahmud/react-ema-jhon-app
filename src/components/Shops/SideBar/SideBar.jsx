import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router";
import "./SideBar.css";
const SideBar = ({ show, sidebarProduct, setShow }) => {
  const { img, name, price } = sidebarProduct;
  const navigate = useNavigate();
  return (
    <div className={`cart-sidebar ${show ? "active" : " "}`}>
      <div className="card">
        <img width={"80"} src={img} alt={name} />
        <div className="details">
          <h4>{name}</h4>
          <span>{price}$</span>
          <div>
            <button onClick={() => navigate("/cart")}>View Carts</button>
          </div>
        </div>
      </div>
      <p className="close-btn" onClick={() => setShow(false)}>
        <VscChromeClose />
      </p>
    </div>
  );
};

export default SideBar;
