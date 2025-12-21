import React from "react";
import "./posts.css";
import icon from "../assets/image-icon.svg";

function Posts() {
  return (
    <section className="posts-container">
      <div className="posts-frame">

        {/* Title */}
        <h1 className="posts-title">All Posts</h1>

        {/* Subtitle lines */}
        <div className="posts-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line short"></div>
        </div>

        {/* Cards Container */}
        <div className="posts-cards">
          {[1, 2, 3].map((post) => (
            <div key={post} className="post-card">
              
              {/* Top section */}
              <div className="post-top">
                <div className="image-icon">
                  
                  <img src={icon} alt="image-icon" className="icon" />
                </div>
              </div>

              {/* Bottom section */}
              <div className="post-bottom">
                <div className="title-bar"></div>

                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>

                <div className="line short"></div>
              </div>

            </div>
          ))}
        </div>

        {/* Button */}
        <div className="posts-buttons">
          <button className="btn-outline">See More</button>
        </div>

      </div>
    </section>
  );
}

export default Posts;
