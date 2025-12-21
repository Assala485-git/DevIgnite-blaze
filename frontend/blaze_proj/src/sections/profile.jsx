import React from "react";
import "./profile.css";
import avatar from "../assets/profile.svg"; // <-- change name if needed

const Profile = () => {
  return (
    <div className="profile-page">
      {/* PAGE TITLE */}
      <h1 className="profile-title">
        <span>|</span> My Profile
      </h1>

      <div className="profile-card">
        {/* LEFT COLUMN */}
        <div className="profile-left">
          <img src={avatar} alt="Profile" className="profile-avatar" />
          <button className="upload-btn">Upload Photo</button>
        </div>

        {/* DIVIDER */}
        <div className="profile-divider" />

        {/* RIGHT COLUMN */}
        <div className="profile-right">
          <ProfileRow label="Full Name" value="nm_djemai@esi.dz" />
          <ProfileRow label="Role" value="President" />
          <ProfileRow label="Email" value="nm_djemai@esi.dz" />
          <ProfileRow label="Phone Number" value="+213 776262511" />
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
