import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { followDepart, unfollowDepart } from "../services/api";

const COLORS = {
  Devlopement: "#B0DCFF",
  Des: "#D6C3FF",
  AI: "#C3FFDD",
  RH: "#FFE4A3",
  Default: "#ffffff",
};

export default function DepartmentCard({ id, tag, user, description, title }) {
  const isPresident = user?.Role === "president";

  const navigate = useNavigate();
  const color = COLORS[tag] || COLORS.Default;

  const [followed, setFollowed] = useState(user?.followedDepartments.includes(id));

  const goToDep = () => navigate(`/department/${id}`);

  const handleFollow = (e) => {
    e.stopPropagation(); 
    if(!followed){
    followDepart(id);
    setFollowed(true);
    } else{
      unfollowDepart(id);
      setFollowed(false);
    }
    
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
    gap: "16px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  }}
>
  <h2 style={{ margin: 0 }}>{title}</h2>

  <p style={{ margin: 0, color: "#CBD5E1", lineHeight: "1.6" }}>
    {description}
  </p>

  {/* Footer */}
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "auto",
    }}
    onClick={(e) => e.stopPropagation()} // prevent card click
  >
    <button
      onClick={handleFollow}
      style={{
        background: followed ? "transparent" : "#3B82F6",
        border: followed ? "1px solid #3E424A" : "none",
        color: "white",
        padding: "8px 18px",
        borderRadius: "999px",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 600,
        transition: "all 0.2s ease",
      }}
    >
      {followed ? "Unfollow" : "Follow"}
    </button>
  </div>
</div>

  );
}
