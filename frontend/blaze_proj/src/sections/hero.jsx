

import React from "react"; 
import "./Hero.css";
import ero from "../assets/hero-design.svg";

function Hero({ scrollToSection, postsRef, departmentsRef }) {
  return (
    <section className="hero-container">
      <img src={ero} alt="image-icon" className="hero-design" />
      <div className="hero-frame">
        <h1 className="hero-title">CSE’s Internal<br/>News Hub</h1>

       <div>
        <h1 className="hook"> Official Platform for CSE Newsletter and communication </h1>
       </div>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection(postsRef)}>
            See Posts →
          </button>
          <button className="btn-outline" onClick={() => scrollToSection(departmentsRef)}>
            See Departments
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

