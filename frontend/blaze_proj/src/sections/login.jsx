import React from "react";
import Lognav from "./lognav.jsx"; // import your navbar
import "./login.css";
import user from "../assets/user.svg"
import lock from "../assets/lock.svg"
import mail from "../assets/mail.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getMe } from "../services/auth";
import { useAuth } from "../context/authContext";

export default function Signup() {
  const navigate = useNavigate();
    const { setUser } = useAuth();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
  
      await login({ email, password });

      
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
       <h1 className="title">Member Log In</h1>

 
  <div className="input-wrapper">
    <span className="input-icon"> <img src={mail} alt="mail icon" /></span>
    <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={input} />
  </div>

  <div className="input-wrapper">
    <span className="input-icon"> <img src={lock} alt="lock icon" /></span>
    <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={input} />
  </div>

  <p className="login-link">
    Already have an account? <span>Login</span>
  </p>

  <button type="submit" disabled={loading} onClick={handleSubmit} style={button}>
          {loading ? "Logging in..." : "Login"}
  </button>
  <footer className="login-footer">
  © Copyright 2025 DevBlaze.
</footer>

</main>

    </div>
  );
}
const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
};
const button = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  background: "#3B82F6",
  color: "#fff",
  cursor: "pointer",
};