import React from "react";
import "./profile.css";
import avatar from "../assets/profile.svg"; 
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";


  

const Profile = () => {
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
    <div className="profile-page">
      {/* PAGE TITLE */}
      <h1 className="profile-title">
        <span>|</span> My Profile
      </h1>

      <div className="profile-card">
        {/* LEFT COLUMN */}
        <div className="profile-left">
          <img alt="Profile" className="profile-avatar" />
          <button className="upload-btn">Upload Photo</button>
        </div>

        {/* DIVIDER */}
        <div className="profile-divider" />

        {/* RIGHT COLUMN */}
        
        <div className="profile-right">
          <ProfileRow label="Full Name" value={user.name} />
          <ProfileRow label="Role"  value={user.Role} />
          <ProfileRow label="Email" value={user.email} />
          <ProfileRow label="Password" value="************" />
          <ProfileRow
            label="About"
            value="Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras."
            multiline
          />
        </div>
      </div>

      {/* LOGOUT */}
      <div className="logout-container">
        <button className="logout-btn">Log out</button>
      </div>

      {/* FOOTER */}
      <p className="profile-footer">© Copyright 2025 DevBlaze.</p>
    </div>
  );
};

const ProfileRow = ({ label, value, multiline }) => {
  return (
    <div className="profile-row">
      <div>
        <p className="row-label">{label}</p>
        <p className={`row-value ${multiline ? "multiline" : ""}`}>
          {value}
        </p>
      </div>
      <button className="edit-btn">Edit</button>
    </div>
  );
};

export default Profile;

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

