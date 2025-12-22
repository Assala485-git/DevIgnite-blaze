import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useAuth } from "../context/authContext";

export default function DashboardLayout() {
  const { user, loading } = useAuth();

  // wait until auth is ready
  if (loading) return null;

  // support both Role and role (depending on your backend)
  const role = user?.Role || user?.role || "user";

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
      {/* pass role to sidebar */}
      <Sidebar role={role} />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Topbar just displays role (no setRole needed now) */}
        <Topbar role={role} />

        <div style={{ marginTop: "25px", width: "100%" }}>
          {/* pages render here + they receive role */}
          <Outlet context={{ role }} />
        </div>
      </div>
    </div>
  );
}
