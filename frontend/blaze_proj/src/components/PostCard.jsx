import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

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
}) {
  const navigate = useNavigate();
  const isPresident = role === "president";

  const goToPost = () => {
    if (dep) navigate(`/department/${dep}/${id}`);
    else navigate(`/post/${id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit?.({ id, dep, tag });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete?.({ id, dep });
  };

  return (
    <div
      onClick={goToPost}
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
/*import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

const TAG_COLORS = {
  DEV: { text: "#B0DCFF", border: "rgba(148,163,184,0.4)" },
  DES: { text: "#D6C3FF", border: "rgba(200,180,255,0.4)" },
  AI: { text: "#C3FFDD", border: "rgba(180,255,220,0.4)" },
  RH: { text: "#FFE4A3", border: "rgba(255,228,163,0.4)" },
  DEFAULT: { text: "#FFFFFF", border: "rgba(255,255,255,0.3)" },
};

export default function PostCard({
  tag = "Dev",
  dep = null,
  id = 1,
  hasImages = true,
  role = "user",
  onDelete,
  onEdit,
}) {
  const navigate = useNavigate();
  const isPresident = role === "president";

  const goToPost = () => {
    if (dep) navigate(`/department/${dep}/${id}`);
    else navigate(`/post/${id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    if (onEdit) onEdit({ id, dep, tag });
    else alert(`Edit Post #${id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete({ id, dep, tag });
    else {
      const ok = confirm(`Delete Post #${id}?`);
      if (ok) alert("Deleted (demo)");
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    alert("Liked (demo)");
  };

  return (
    <div
      onClick={goToPost}
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
        cursor: "pointer",
      }}
    >
      {/* TAG }
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

      {/* TITLE }
      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
        Mobile App Repo
      </h3>
        {/*<div style={lineStyle}></div>
      <div style={lineStyle}></div>
       {hasImages && (
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={imgStyle}></div>
          <div style={imgStyle}></div>
        </div>
      )}}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat, molestias accusantium nihil ut velit quaerat quo corrupti eveniet consectetur laudantium eos, reiciendis eligendi quod praesentium soluta quis blanditiis quae.</p>
      
     <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
  <button onClick={handleLike} style={iconBtn}>♡</button>

  {isPresident && (
    <>
      <button onClick={handleEdit} style={iconBtn}>✎</button>
    <button
  onClick={handleDelete}
  title="Delete"
  style={{
    ...iconBtn,
    color: "#FFB8B8", // Soft red
  }}
  onMouseEnter={(e) => (e.target.style.color = "#FFB8B8")}
  onMouseLeave={(e) => (e.target.style.color = "#fbd2d2ff")}
>
  <FiTrash2 size={20} />
</button>

    </>
  )}
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

const iconBtn = {
  background: "transparent",
  border: "none",
  cursor: "pointer",

  fontSize: "25px",     
  color: "#CBD5E1",     

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "0.2s ease",
};*/

