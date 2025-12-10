import { FaHome, FaRegBell, FaUser, FaLaptopCode, FaLayerGroup, FaBars } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/LogoLeft.png"; 
import { FaChevronRight } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div style={{
      width: "264px",
      background: "#070707",
      color: "#E1E6F0",
      minHeight: "100vh",
      padding: "25px 20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>

      {/* TOP SECTION */}
      <div>
       {/* Logo + Title */}
<div style={{ 
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "40px"
}}>


{/*CSE LOGO  */}
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

          {/* Section title */}
          <p style={{
            marginTop: "30px",
            marginBottom: "10px",
            color: "#6B7380",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}>
            <hr style={{
  border: "none",
  borderTop: "1px solid #1F242D",
  margin: "20px 0",
}} />
          <div style={{ 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center",
  marginBottom: "12px",
  paddingRight: "5px"
}}>
  <span style={{ 
    fontSize: "12px", 
    fontWeight: 700, 
    letterSpacing: "1px", 
    color: "#6B7380"
  }}>
    MY DEPARTMENTS
  </span>

  <div style={{
    width: "22px",
    height: "22px",
    borderRadius: "6px",
    background: "#1A1F27",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    color: "#9BA3AF",
    cursor: "pointer"
  }}>
    +
  </div>
</div>
              
           
          </p>
              
          {/* Departments list */}
          <SidebarLink icon={<FaLaptopCode />} text="Development" to="/development" />
          <SidebarLink icon={<MdDesignServices />} text="UI/UX" to="/uiux" />
          <SidebarLink icon={<FaLayerGroup />} text="Design" to="/design" />
          <SidebarLink icon={<FaLaptopCode />} text="Robotics" to="/robotics" />
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div style={{ marginTop: "40px" }}>
        <SidebarLink icon={<FaRegBell />} text="Notifications" to="/notifications" />
        <SidebarLink icon={<FaUser />} text="Account" to="/account" />
      </div>
    </div>
  );
}

/* Component for each link */
function SidebarLink({ icon, text, to }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",  // LEFT and RIGHT space
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

      {/* LEFT SIDE (icon + text) */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "18px" }}>{icon}</span>
        {text}
      </div>

      {/* RIGHT SIDE : the “>” arrow */}
      <FaChevronRight size={14} color="#667085" />
    </Link>
  );
}



