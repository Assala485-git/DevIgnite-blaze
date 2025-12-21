import React from "react";
import Lognav from "./lognav.jsx"; // import your navbar
import "./login.css";
import user from "../assets/user.svg"
import lock from "../assets/lock.svg"
import mail from "../assets/mail.svg"

export default function Login() {
  return (
    <div className="login-page">
      <Lognav /> {/* navbar will render here */}
      <main className="login-content">
       <h1 className="title">Member Sign-Up</h1>

  <div className="input-wrapper">
    <span className="input-icon">  <img src={user} alt="user icon" /></span>
    <input type="text" placeholder="Full Name" />
  </div>

  <div className="input-wrapper">
    <span className="input-icon"> <img src={mail} alt="mail icon" /></span>
    <input type="email" placeholder="Email" />
  </div>

  <div className="input-wrapper">
    <span className="input-icon"> <img src={lock} alt="lock icon" /></span>
    <input type="password" placeholder="Password" />
  </div>

  <p className="login-link">
    Already have an account? <span>Login</span>
  </p>

  <button className="signup-btn">Sign Up</button>
  <footer className="login-footer">
  © Copyright 2025 DevBlaze.
</footer>

</main>

    </div>
  );
}
