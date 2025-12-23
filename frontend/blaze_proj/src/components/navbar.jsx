import React from "react";
import "./Navbar.css";
import logo from "../assets/cse_logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbar() {  

  
const { user, loading } = useAuth();


  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-left">
          <img src={logo} alt="CSE Hub logo" className="logo" />
          <span className="brand">CSE <br /> Hub</span>
        </div>
        {!user &&(
          <div className="navbar-right">
           <Link to="/login">
            <button className="login-btn">Log in </button>

          </Link>
          
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>

          </Link>
        </div>
        )}
        
      </nav>
    </header>
  );
}

export default Navbar;
