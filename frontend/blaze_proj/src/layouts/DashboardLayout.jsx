import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout() {
  const [role, setRole] = useState("user"); // "user" or "president"

  return (
    <div
      style={{
        display: "flex",
        background: "#0A0C10",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Topbar role={role} setRole={setRole} />

        <div style={{ marginTop: "25px", width: "100%" }}>
          {/* pages render here + they receive {role} */}
          <Outlet context={{ role }} />
        </div>
      </div>
    </div>
  );
}
