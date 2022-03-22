import React from "react";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router";
import HeroImage from "../../images/hero-image.jpg";
import "./Hero.css";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero-container">
            <div className="hero-info">
              <span className="subtitle">
                Sale up to <b>70%</b> off
              </span>
              <h1>New Collection for all</h1>
              <p>Discover all the new arrivals of ready-to-wear collection.</p>
              <button onClick={() => navigate("/shops")}>
                Shop Now <BiCart />
              </button>
            </div>

            <div className="hero-image">
              <img src={HeroImage} alt={HeroImage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
