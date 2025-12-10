import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        background: "#0A0C10",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* CENTERED PAGE WRAPPER */}
        <div
          style={{
            width: "100%",
            maxWidth: "1500px",
            padding: "20px 40px",
          }}
        >
          <Topbar />

          <div style={{ marginTop: "20px" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
