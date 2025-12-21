import React from "react";
import "./departments.css";

function Departments() {
  return (
    <section className="dep-container">
     
      {/* Blue Outline Frame */}
      <div className="dep-frame">   

        {/* Title */}
        <h1 className="dep-title">All Departments</h1>

        {/* Subtitle placeholder lines */}
        <div className="dep-lines">
          
          <div className="line"></div>
          <div className="line"></div>
          <div className="line short"></div>
        </div>
{/* Cards Container */}
<div className="dep-cards">
  {[1, 2, 3].map((post) => (
    <div className="dep-card" key={post}>
      
      <div className="dep-content">
        <div className="dep-title-bar"></div>
        <div className="dep-text-bar"></div>
        <div className="dep-text-bar"></div>
        <div className="dep-text-bar short"></div>
      </div>
    </div>
  ))}
</div>

        {/* Buttons */}
        <div className="dep-buttons">
          
          <button className="btn-outline">See More</button>
        </div>
         
 </div>
      

    </section>
    
  );
}

export default Departments;
