import React from "react";
import "./departments.css";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";


// Example department data
const departmentsData = [
  { id: 1, title: "Development", description: "Handles software development.", tag: "DEV", dep: "dev" },
  { id: 2, title: "AI Team", description: "Handles AI research.", tag: "AI", dep: "ai" },
  { id: 3, title: "Design", description: "Handles design tasks.", tag: "DES", dep: "des" },
];


function Departments() {
  const navigate = useNavigate();

 function handleDepartments(){
  navigate("/departments");
}
  return (
    <section className="dep-container">
      <div className="dep-frame">
        <h1 className="dep-title" onClick={handleDepartments} >All Departments</h1>

        {/* Cards Container */}
        <div
          className="dep-cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px", // increased spacing between cards
          }}
        >
          {departmentsData.map((dep) => (
            <div
              key={dep.id}
              style={{
                width: "300px",      // fixed width
                minHeight: "260px",  // fixed height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <PostCard
                id={dep.id}
                title={dep.title}
                description={dep.description}
                tag={dep.tag}
                dep={dep.dep}
                role="user" // hides edit/delete buttons
              />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div
          className="dep-buttons"
          style={{ marginTop: "30px", textAlign: "center" }}
        >
          <button className="btn-outline" onClick={handleDepartments}>See More</button>
        </div>
      </div>
    </section>
  );
}

export default Departments;