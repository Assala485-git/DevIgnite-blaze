import { useOutletContext } from "react-router-dom";
import DepartmentCard from "../components/DepartmentCard";
import { FiCalendar, FiShare2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getDepartments } from "../services/api";
import { useAuth } from "../context/authContext";

  
export default function AllDepartments() {
  
const { user, loading } = useAuth();

if (loading) return null;

const role = user?.Role; // president / manager / user
console.log(role);
const isPresident = role === "president";

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

  const [departments,setDepartments]=useState([]);
  const [ setLoading] = useState(true);
  useEffect(() => {
    getDepartments()
      .then((res) => {
        setDepartments(res.data);
        console.log(user);
      })
      .catch((err) => console.error(err))
      //.finally(() => setLoading(false));
  }, []);

  

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
        {departments.map((dept) => (
                  <DepartmentCard
                    key={dept._id}
                    id={dept._id}
                    title={dept.name}
                    description={dept.description}
                    tag={dept.name}
                    //dep={post.department || null}
                    role={role}
                  />
                ))}
      </div>
    </>
  );
}
