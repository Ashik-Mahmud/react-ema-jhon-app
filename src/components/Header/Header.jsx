import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "./../../images/Logo.svg";
import "./Header.css";
function Header() {
  return (
    <header id="header">
      <div className="container p-md">
        <nav className="navbar">
          <a href="/">
            <img src={logo} alt="app logo" />
          </a>
          <ul className="primary-menu">
            {["home", "Shops", "order", "order review"].map((link, index) => (
              <NavLinks key={link + index} linkName={link} />
            ))}
            <li>
              <a href="/cart">
                <MdOutlineShoppingCart className="cart-icon" />{" "}
                <sup className="badge">15</sup>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

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
