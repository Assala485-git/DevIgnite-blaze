import { useOutletContext } from "react-router-dom";
import DepartmentCard from "../components/DepartmentCard";
import { FiCalendar, FiShare2 } from "react-icons/fi";

export default function AllDepartments() {
  const { role } = useOutletContext(); // ✅

  const buttonStyle = {
    background: "transparent",
    border: "1px solid #3E424A",
    borderRadius: "8px",
    padding: "8px 14px",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <>
      {/* TITLE */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
        <div style={{ width: "4px", height: "32px", background: "#ffffff", marginRight: "12px", borderRadius: "2px" }} />
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff", margin: 0 }}>All Departments</h1>
      </div>

      {/* BUTTONS */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "25px" }}>
        <button style={buttonStyle}>
          <FiCalendar size={16} /> Today ▾
        </button>

        <button style={buttonStyle}>
          <FiShare2 size={16} /> Share
        </button>
      </div>

      {/* GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "24px" }}>
        <DepartmentCard tag="Dev" role={role} />
        <DepartmentCard tag="Des" role={role} />
        <DepartmentCard tag="AI" role={role} />

        <DepartmentCard tag="Dev" role={role} />
        <DepartmentCard tag="RH" role={role} />
        <DepartmentCard tag="Dev" role={role} />

        <DepartmentCard tag="AI" role={role} />
        <DepartmentCard tag="Dev" role={role} />
        <DepartmentCard tag="Des" role={role} />
      </div>
    </>
  );
}
