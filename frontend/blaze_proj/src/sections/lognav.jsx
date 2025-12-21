import React from "react";
import { Link } from "react-router-dom";
import "./lognav.css"; 
import logo from "../assets/cse_logo.svg"; // your logo file

export default function Lognav() {
  return (
    <header className="login-navbar">
      <div className="login-navbar-left">
        <img src={logo} alt="CSE Hub Logo" className="login-logo" />
        <span>CSE’s Newsletter <br /> & Communication <br /> Platform</span>
      </div>
      <div className="login-navbar-right">
        <Link to="/">
          <button className="back-btn">Back to Main</button>
        </Link>
      </div>
    </header>
  );
}
