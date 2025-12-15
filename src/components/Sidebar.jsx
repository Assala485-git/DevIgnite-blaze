import { FaHome, FaUser, FaLayerGroup, FaBars, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/LogoLeft.png";

export default function Sidebar({ role }) {
  const isPresident = role === "president";

  return (
    <div
      style={{
        width: "264px",
        background: "#070707",
        color: "#E1E6F0",
        minHeight: "100vh",
        padding: "25px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* TOP SECTION */}
      <div>
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <img
            src={logo}
            alt="CSE logo"
            style={{ width: "700px", height: "70px", objectFit: "contain" }}
          />
        </div>

        {/* Navigation links */}
        <div>
          <SidebarLink icon={<FaHome />} text="General" to="/general" />
          <SidebarLink icon={<FaBars />} text="Posts" to="/posts" />
          <SidebarLink icon={<FaLayerGroup />} text="Departments" to="/departments" />

         
          {isPresident && (
            <div style={{ marginLeft: "18px", marginTop: "6px", marginBottom: "10px" }}>
              <DepartmentLink text="Development" to="/department/dev" />
              <DepartmentLink text="UI/UX" to="/department/uiux" />
              <DepartmentLink text="Design" to="/department/des" />
              <DepartmentLink text="Relax" to="/department/rh" />
            </div>
          )}

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #1F242D",
              margin: "20px 0",
            }}
          />
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div style={{ marginTop: "40px" }}>
        <SidebarLink icon={<FaUser />} text="Account" to="/account" />
      </div>
    </div>
  );
}

/* Component for each main link */
function SidebarLink({ icon, text, to }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        color: "#CDD4E0",
        padding: "12px 15px",
        borderRadius: "8px",
        textDecoration: "none",
        marginBottom: "8px",
        fontSize: "15px",
        transition: "0.2s",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "18px" }}>{icon}</span>
        {text}
      </div>

      {/* RIGHT ARROW */}
      <FaChevronRight size={14} color="#667085" />
    </Link>
  );
}

/* Small department link (President only) */
function DepartmentLink({ text, to }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "#9CA3AF",
        fontSize: "13px",
        padding: "6px 0",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#9CA3AF",
        }}
      />
      {text}
    </Link>
  );
}
