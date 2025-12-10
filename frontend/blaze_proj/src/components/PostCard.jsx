import {
  FiHeart,
  FiMessageCircle,
  FiEye,
  FiMoreHorizontal,
  FiTrash2,
  FiEdit2
} from "react-icons/fi";

export default function PostCard({ hasImages = true }) {
  return (
    <div
      style={{
        background: "#23313A",
        padding: "18px",
        borderRadius: "16px",
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
      }}
    >
      
      <div style={{ position: "absolute", top: "15px", right: "15px" }}>
        <FiMoreHorizontal size={18} color="#ffffffff" />
      </div>

      {/* Tag */}
    <span
  style={{
    border: "1px solid rgba(148, 163, 184, 0.4)", 
    padding: "2px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    color: "#B0DCFF", 
    background: "transparent",
    width: "fit-content",
  }}
>
  Dev
</span>


      {/* Title */}
      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
        Mobile App Repo
      </h3>

      {/* Lines */}
      <div style={lineStyle}></div>
      <div style={lineStyle}></div>

      {/* Images*/}
      {hasImages && (
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={imgStyle}></div>
          <div style={imgStyle}></div>
        </div>
      )}

     {/* Bottom Icons */}
<div
  style={{
    display: "flex",
    justifyContent: "flex-end", 
    gap: "14px",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: "8px",
  }}
>
  <FiHeart color="#FFB8B8" size={16} style={{ cursor: "pointer" }} />
  <FiEdit2 color="#9CA3AF" size={16} style={{ cursor: "pointer" }} />
  <FiTrash2 color="#B0DCFF" size={16} style={{ cursor: "pointer" }} />
</div>

    </div>
  );
}

const lineStyle = {
  background: "#7A8286",
  height: "20px",
  width: "80%",
  borderRadius: "4px",
};

const imgStyle = {
  background: "#E2E7F0",
  width: "100%",
  height: "75px",
  borderRadius: "8px",
};
