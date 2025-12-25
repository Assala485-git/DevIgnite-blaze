import React from "react";
import "./posts.css";
import PostCard from "../components/PostCard"; 
import { useNavigate } from "react-router-dom";

// Example post data
const postsData = [
  { id: 1, title: "Post One", description: "This is the first post.", tag: "DEV", dep: null },
  { id: 2, title: "Post Two", description: "This is the second post.", tag: "AI", dep: "ai" },
  { id: 3, title: "Post Three", description: "This is the third post.", tag: "DES", dep: null },
];

function Posts() {
  
  const navigate = useNavigate();

 function handlePosts(){
  navigate("/posts");
}


  return (
    <section className="posts-container">
      <div className="posts-frame">
        {/* Title */}
        <h1 className="posts-title" onClick={handlePosts}>All Posts</h1>

        {/* Cards Container */}
        <div
          className="posts-cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px", // increased spacing between cards
          }}
        >
          {postsData.map((post) => (
            <div
              key={post.id}
              style={{
                width: "300px",      // fixed width
                minHeight: "260px",  // fixed height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <PostCard
                id={post.id}
                title={post.title}
                description={post.description}
                tag={post.tag}
                dep={post.dep}
                role="user" // hides edit/delete buttons
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="posts-buttons" style={{ marginTop: "30px", textAlign: "center" }}>
          <button className="btn-outline" onClick={handlePosts}>See More</button>
        </div>
      </div>
    </section>
  );
}

export default Posts;