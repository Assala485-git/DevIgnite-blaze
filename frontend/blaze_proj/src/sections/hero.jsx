import React from "react";
import "./Hero.css";
import ero from "../assets/hero-design.svg";

function Hero() {
  return (
    <section className="hero-container">
      <img src={ero} alt="image-icon" className="hero-design" />
      {/* Blue Outline Frame */}
      <div className="hero-frame">   

        {/* Title */}
        <h1 className="hero-title">CSE’s Internal<br/>News Hub</h1>

        {/* Subtitle placeholder lines */}
        <div className="hero-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line short"></div>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary">See Posts →</button>
          <button className="btn-outline">See Departments</button>
        </div>
         
 </div>
      

    </section>
    
  );
}

export default Hero;
