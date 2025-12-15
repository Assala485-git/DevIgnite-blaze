import { useParams, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { FiCheckCircle, FiShare2 } from "react-icons/fi";

export default function DepartmentPostDetails() {
  const { dep, id } = useParams();
  const { role } = useOutletContext();
  const [followed, setFollowed] = useState(true);

  const btn = {
    background: "transparent",
    border: "1px solid #3E424A",
    borderRadius: "10px",
    padding: "8px 14px",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    fontWeight: 600,
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      {/* Title + Followed */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "25px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "4px", height: "32px", background: "#ffffff", marginRight: "12px", borderRadius: "2px" }} />
          <h1 style={{ fontSize: "32px", fontWeight: 700, margin: 0 }}>
            {dep.toUpperCase()} – Post #{id}
          </h1>
        </div>

        <button
          onClick={() => setFollowed((p) => !p)}
          style={{ ...btn, background: followed ? "rgba(59,130,246,0.15)" : "transparent", borderColor: "#2A3340" }}
        >
          <FiCheckCircle /> {followed ? "Followed" : "Follow"}
        </button>
      </div>

      <h2 style={{ marginTop: "20px" }}>Mobile App Repo</h2>

      <div style={{ height: "12px", background: "#6B7280", margin: "8px 0" }} />
      <div style={{ height: "12px", background: "#6B7280", margin: "8px 0" }} />
      <div style={{ height: "12px", background: "#6B7280", margin: "8px 0" }} />

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1, height: "150px", background: "#E2E7F0", borderRadius: "12px" }} />
        <div style={{ flex: 1, height: "150px", background: "#E2E7F0", borderRadius: "12px" }} />
      </div>

    
      <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
        <button style={btn}>
          <FiShare2 /> Share
        </button>
      </div>
    </div>
  );
}
