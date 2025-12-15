import { useOutletContext } from "react-router-dom";
import { FiShare2, FiHeart, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function PostDetails() {
  const { role } = useOutletContext();
  const isPresident = role === "president";

  return (
    <>
      {/* TITLE BAR */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "4px", height: "32px", background: "#ffffff", borderRadius: "2px" }} />
        <h1 style={{ color: "white", margin: 0 }}>All Posts</h1>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ marginTop: "40px", width: "100%" }}>
        {/* Top row: Title + (Date/Tag/Follow) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "32px", margin: 0 }}>
            Design League is Here!
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#9CA3AF", fontSize: "13px" }}>11/11/2025</span>

            <span
              style={{
                border: "1px solid rgba(148,163,184,0.4)",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                color: "#D6C3FF",
              }}
            >
              Des
            </span>

            <button
              style={{
                background: "#3B82F6",
                border: "none",
                color: "white",
                padding: "8px 16px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
              }}
              onClick={() => alert("Follow (demo)")}
            >
              Follow
            </button>
          </div>
        </div>

        {/* Text lines */}
        <div style={{ marginTop: "20px" }}>
          <div style={line}></div>
          <div style={line}></div>
          <div style={line}></div>
          <div style={line}></div>
          <div style={line}></div>
        </div>

        {/* Two Images */}
        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
          <div style={image}></div>
          <div style={image}></div>
        </div>

        {/* Bottom row: Actions left + Share right */}
        <div
          style={{
            marginTop: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LEFT ICONS */}
          <div style={{ display: "flex", gap: "14px" }}>
            <button style={iconBtn} title="Like" onClick={() => alert("Like (demo)")}>
              <FiHeart size={20} />
            </button>

            {isPresident && (
              <>
                <button style={iconBtn} title="Edit" onClick={() => alert("Edit (demo)")}>
                  <FiEdit2 size={20} />
                </button>

                <button
                  style={{ ...iconBtn, color: "#F87171" }}
                  title="Delete"
                  onClick={() => {
                    const ok = confirm("Delete this post?");
                    if (ok) alert("Deleted (demo)");
                  }}
                >
                  <FiTrash2 size={20} />
                </button>
              </>
            )}
          </div>

          {/* SHARE BUTTON */}
          <button
            style={{
              background: "transparent",
              border: "1px solid #3E424A",
              color: "white",
              padding: "8px 14px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <FiShare2 /> Share
          </button>
        </div>
      </div>
    </>
  );
}

const line = {
  background: "#7A8286",
  height: "14px",
  width: "100%",
  borderRadius: "4px",
  marginBottom: "10px",
};

const image = {
  background: "#E2E7F0",
  width: "100%",
  height: "260px",
  borderRadius: "16px",
};

const iconBtn = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
