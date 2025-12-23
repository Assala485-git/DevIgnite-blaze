

import React from "react";
import Lognav from "./lognav.jsx"; // import your navbar
import "./login.css";
import user from "../assets/user.svg"
import lock from "../assets/lock.svg"
import mail from "../assets/mail.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, getMe } from "../services/auth";
import { useAuth } from "../context/authContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signUp({ name,email, password });

      const res = await getMe();
      setUser(res.data);

      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-page">
      <Lognav /> {/* navbar will render here */}
      <main className="login-content">
       <h1 className="title">Member Sign-Up</h1>

  <div className="input-wrapper">
    <span className="input-icon">  <img src={user} alt="user icon" /></span>
    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
  </div>

  <div className="input-wrapper">
    <span className="input-icon"> <img src={mail} alt="mail icon" /></span>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>

  <div className="input-wrapper">
    <span className="input-icon"> <img src={lock} alt="lock icon" /></span>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <p className="login-link">
    Already have an account? <span>Login</span>
  </p>

  <button className="signup-btn" onClick={handleSubmit} >Sign Up</button>
  <footer className="login-footer">
  © Copyright 2025 DevBlaze.
</footer>

</main>

    </div>
  );
}
