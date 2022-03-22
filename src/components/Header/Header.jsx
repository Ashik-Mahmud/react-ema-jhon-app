import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { StorageItem } from "../LocalStorage/Storage";
import logo from "./../../images/Logo.svg";
import "./Header.css";
const Header = ({ cartCount }) => {
  const items = StorageItem();
  return (
    <header id="header">
      <div className="container p-md">
        <nav className="navbar">
          <NavLink to="/">
            <img src={logo} alt="app logo" />
          </NavLink>
          <ul className="primary-menu">
            {["home", "Shops", "order"].map((link, index) => (
              <NavLinks key={link + index} linkName={link} />
            ))}
            <li>
              <NavLink to="/cart">
                <MdOutlineShoppingCart className="cart-icon" />{" "}
                <sup className="badge">
                  {cartCount ? cartCount : items.length}
                </sup>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavLinks = ({ linkName }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={linkName === "home" ? "/" : "/" + linkName}
      >
        {linkName}
      </NavLink>
    </li>
  );
};

export default Header;
