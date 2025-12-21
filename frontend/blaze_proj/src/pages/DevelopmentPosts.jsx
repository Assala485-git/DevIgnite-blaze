import { useParams } from "react-router-dom";

export default function DepartmentPostDetails() {
  const { dep, id } = useParams();

  return (
    <>
      <div style={{ padding: "20px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
          <div
            style={{
              width: "4px",
              height: "32px",
              background: "#ffffff",
              marginRight: "12px",
              borderRadius: "2px",
            }}
          ></div>

          <h1 style={{ fontSize: "32px", fontWeight: 700, margin: 0 }}>
            {dep.toUpperCase()} – Post #{id}
          </h1>
        </div>

        <h2 style={{ marginTop: "20px" }}>Mobile App Repo</h2>
        
        <div style={{ height: "12px", background: "#6B7280", margin: "8px 0" }}></div>
        <div style={{ height: "12px", background: "#6B7280", margin: "8px 0" }}></div>
        <div style={{ height: "12px", background: "#6B7280", margin: "8px 0" }}></div>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={{ flex: 1, height: "150px", background: "#E2E7F0", borderRadius: "12px" }}></div>
          <div style={{ flex: 1, height: "150px", background: "#E2E7F0", borderRadius: "12px" }}></div>
        </div>
      </div>
    </>
  );
}
