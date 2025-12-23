import { FaHome, FaUser, FaLayerGroup, FaBars, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/LogoLeft.png";
import "./Sidebar.css";

export default function Sidebar({ role }) {
  const isPresident = role === "president";

  return (
    <aside className="sidebar">
      {/* TOP */}
      <div>
        <div className="sidebar-logo">
          <img src={logo} alt="CSE logo" />
        </div>

        <nav className="sidebar-nav">
          <SidebarLink icon={<FaHome />} text="General" to="/general" />
          <SidebarLink icon={<FaBars />} text="Posts" to="/posts" />
          <SidebarLink icon={<FaLayerGroup />} text="Departments" to="/departments" />

          {isPresident && (
            <div className="sidebar-sub">
              <DepartmentLink text="Development" to="/department/dev" />
              <DepartmentLink text="UI/UX" to="/department/uiux" />
              <DepartmentLink text="Design" to="/department/des" />
              <DepartmentLink text="Relax" to="/department/rh" />
            </div>
          )}

          <hr />
        </nav>
      </div>

      {/* FOOTER */}
      <div>
        <SidebarLink icon={<FaUser />} text="Account" to="/profile" />
      </div>
    </aside>
  );
}

function SidebarLink({ icon, text, to }) {
  return (
    <Link to={to} className="sidebar-link">
      <div className="sidebar-link-left">
        <span className="icon">{icon}</span>
        {text}
      </div>
      <FaChevronRight className="arrow" />
    </Link>
  );
}

function DepartmentLink({ text, to }) {
  return (
    <Link to={to} className="sidebar-department">
      <span className="dot" />
      {text}
    </Link>
  );
}
