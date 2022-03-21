import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
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
            {["home", "products", "order", "order review"].map((link) => (
              <NavLinks linkName={link} />
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
      <a href={linkName === "home" ? "/" : "/" + linkName}>{linkName}</a>
    </li>
  );
};

export default Header;
