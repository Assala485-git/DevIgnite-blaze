import { useNavigate } from "react-router-dom";
import { useState } from "react";

const COLORS = {
  Dev: "#B0DCFF",
  Des: "#D6C3FF",
  AI: "#C3FFDD",
  RH: "#FFE4A3",
  Default: "#ffffff",
};

export default function DepartmentCard({ tag, role = "user" }) {
  const isPresident = role === "president";

  const navigate = useNavigate();
  const color = COLORS[tag] || COLORS.Default;

  const [followed, setFollowed] = useState(false);

  const goToDep = () => navigate(`/department/${tag.toLowerCase()}`);

  const handleFollow = (e) => {
    e.stopPropagation(); 
    setFollowed((p) => !p);
  };

  return (
    <div
      onClick={goToDep}
      style={{
        background: "#23313A",
        padding: "20px",
        borderRadius: "16px",
        cursor: "pointer",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
      }}
    >
      {/* TITLE PLACEHOLDER */}
      <div
        style={{
          height: "24px",
          width: "60%",
          background: "#ffffff",
          borderRadius: "6px",
          opacity: 0.8,
        }}
      />

      {/* TEXT LINES */}
      <div style={{ height: "12px", width: "90%", background: "#7A8286", borderRadius: "4px" }} />
      <div style={{ height: "12px", width: "75%", background: "#7A8286", borderRadius: "4px" }} />

      {/* TAG */}
      <span
        style={{
          marginTop: "10px",
          border: `1px solid ${color}`,
          color,
          padding: "2px 8px",
          borderRadius: "6px",
          width: "fit-content",
          fontSize: "12px",
        }}
      >
        {tag}
      </span>

     
      {isPresident && (
        <button
          onClick={handleFollow}
          style={{
            position: "absolute",
            right: "16px",
            bottom: "16px",
            background: followed ? "transparent" : "#3B82F6",
            border: followed ? "1px solid #3E424A" : "none",
            color: "white",
            padding: "8px 14px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          {followed ? "Followed" : "Follow"}
        </button>
      )}
    </div>
  );
}
