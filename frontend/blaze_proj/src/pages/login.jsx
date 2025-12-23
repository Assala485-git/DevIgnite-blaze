import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getMe } from "../services/auth";
import { useAuth } from "../context/authContext";

export default function Login() {
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
    <div style={container}>
      <form onSubmit={handleSubmit} style={form}>
        <h2 style={{ color: "#fff" }}>Login</h2>

        {error && <p style={errorStyle}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={input}
        />

        <button type="submit" disabled={loading} style={button}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

/* -------- styles -------- */

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#0F172A",
};

const form = {
  background: "#1E293B",
  padding: "30px",
  borderRadius: "12px",
  width: "320px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

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

const errorStyle = {
  color: "#F87171",
  fontSize: "14px",
};
