import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { deletePost } from "../services/api";
const TAG_COLORS = {
  DEV: { text: "#B0DCFF", border: "rgba(148,163,184,0.4)" },
  DES: { text: "#D6C3FF", border: "rgba(200,180,255,0.4)" },
  AI: { text: "#C3FFDD", border: "rgba(180,255,220,0.4)" },
  RH: { text: "#FFE4A3", border: "rgba(255,228,163,0.4)" },
  DEFAULT: { text: "#FFFFFF", border: "rgba(255,255,255,0.3)" },
};

export default function PostCard({
  id,
  title,
  description,
  tag = "DEV",
  dep = null,
  role = "user",
  onDelete,
  onEdit,
  image
}) {
  const navigate = useNavigate();
  const isPresident = role === "president";

  

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit?.({ id, dep, tag });
  };

  const handleDelete = (e) => {
    
    
    e.stopPropagation();
    onDelete?.(id );
    
    

  };

  return (
    <div
      style={{
        background: "#23313A",
        padding: "18px",
        borderRadius: "16px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        cursor: "pointer",
      }}
     >
      {/* TAG */}
      <span
        style={{
          border: `1px solid ${TAG_COLORS[tag]?.border || TAG_COLORS.DEFAULT.border}`,
          padding: "2px 10px",
          borderRadius: "6px",
          fontSize: "12px",
          color: TAG_COLORS[tag]?.text || TAG_COLORS.DEFAULT.text,
          textTransform: "uppercase",
          width: "fit-content",
        }}
      >
        {tag}
      </span>

      {/* TITLE */}
      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.5" }}>
        {description}
      </p>
      {image && <div>
        <img
          src={`http://localhost:5000/images/${image}`}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            marginTop: "12px",
            objectFit: "cover",
          }}
        />
      </div>}

      {/* ACTIONS */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        {isPresident && (
          <>
            <button onClick={handleEdit} style={iconBtn}>✎</button>
            <button onClick={handleDelete} style={{ ...iconBtn, color: "#FFB8B8" }}>
              <FiTrash2 size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const iconBtn = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "22px",
  color: "#CBD5E1",
};
