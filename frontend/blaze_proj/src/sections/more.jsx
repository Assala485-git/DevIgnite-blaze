import React from "react";
import "./more.css";
import sparkle from "../assets/sparkle.svg";


export default function More() {
  return (
    <section className="more-container" aria-labelledby="more-title">
      <div className="more-frame">

        {/* Title between waves */}
        <div className="title-wrapper">
          <svg className="wave-line" viewBox="0 0 800 60" preserveAspectRatio="none" aria-hidden>
            <path d="M0 30 C200 -10, 600 70, 800 30"
      fill="none" stroke="#06A6FF" stroke-width="2" />


          </svg>

          <h2 id="more-title" className="more-title">
            Did you know? <img src={sparkle} alt="" className="sparkle" /> 
          </h2>

          <svg className="wave-line" viewBox="0 0 800 60" preserveAspectRatio="none" aria-hidden>
            <path d="M0 30 C200 -10, 600 70, 800 30"
      fill="none" stroke="#06A6FF" stroke-width="2" />


          </svg>
        </div>

        {/* Subtitle */}
        <p className="more-subtitle">
          You can get notifications for specific departments in your email.
        </p>

        {/* Buttons */}
        <div className="more-actions">
          <button className="btn btn-primary">Sign Up Now !</button>
          <button className="btn btn-outline">Log In</button>
        </div>
      </div>
    </section>
  );
}
