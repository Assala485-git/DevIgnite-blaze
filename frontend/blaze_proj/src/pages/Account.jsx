import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // While checking authentication
  if (loading) {
    return <p style={text}>Loading account...</p>;
  }

  // If not authenticated
  if (!user) {
    return (
      <div style={container}>
        <p style={text}>You are not logged in.</p>
        <button style={button} onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div style={container}>
      <h1 style={title}>My Account</h1>

      <div style={card}>
        <Info label="Name" value={user.name} />
        <Info label="Email" value={user.email} />
        <Info label="Role" value={user.role} />
      </div>
    </div>
  );
}

/* -------- Small reusable component -------- */
const Info = ({ label, value }) => (
  <div style={{ marginBottom: "12px" }}>
    <p style={{ color: "#94A3B8", fontSize: "13px" }}>{label}</p>
    <p style={{ color: "#FFFFFF", fontSize: "16px", margin: 0 }}>{value}</p>
  </div>
);

/* -------- styles -------- */
const container = {
  minHeight: "100vh",
  background: "#0F172A",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const card = {
  background: "#1E293B",
  padding: "24px",
  borderRadius: "12px",
  width: "320px",
};

const title = {
  color: "#FFFFFF",
  marginBottom: "20px",
};

const text = {
  color: "#CBD5E1",
};

const button = {
  marginTop: "10px",
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  background: "#3B82F6",
  color: "#fff",
  cursor: "pointer",
};
