import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiCalendar, FiShare2 } from "react-icons/fi";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../services/api";

export default function AllPosts() {
  const { role } = useOutletContext();
  const isPresident = role === "president";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* TITLE */}
      <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff" }}>
        All Posts
      </h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {posts.map((post) => (
          <PostCard
            key={post._id}
            id={post._id}
            title={post.title}
            description={post.content}
            tag={post.tag || "DEV"}
            dep={post.department || null}
            role={role}
          />
        ))}
      </div>
    </>
  );
}

/*import { useOutletContext } from "react-router-dom";
import PostCard from "../components/PostCard";
import { FiCalendar, FiShare2 } from "react-icons/fi";
import { getAllPosts } from "../services/api";
import { useState,useEffect } from "react";

export default function AllPosts() {
  const { role } = useOutletContext();         
  const isPresident = role === "president";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(res => {
        setPosts(res.data);
        console.log(posts);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  
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
      {/* TITLE }
      <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
        <div
          style={{
            width: "4px",
            height: "32px",
            background: "#ffffff",
            marginRight: "12px",
            borderRadius: "2px",
          }}
        />
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
          All Posts
        </h1>
      </div>

      {/* BUTTONS }
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "25px",
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <button style={buttonStyle}>
            <FiCalendar size={16} /> Today ▾
          </button>

          {isPresident && (
            <button style={buttonStyle}>
              + Create Post
            </button>
          )}
        </div>

        <button style={buttonStyle}>
          <FiShare2 size={16} /> Share
        </button>
      </div>

      {/* GRID }
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {[
          { tag: "Dev", hasImages: true },
          { tag: "RH", hasImages: false },
          { tag: "AI", hasImages: true },
          { tag: "Des", hasImages: false },
          { tag: "Dev", hasImages: true },
          { tag: "AI", hasImages: false },
          { tag: "RH", hasImages: true },
          { tag: "Des", hasImages: false },
          { tag: "Dev", hasImages: true },
        ].map((p, idx) => (
          <PostCard
            key={idx}
            tag={p.tag}
            hasImages={p.hasImages}
            role={role}     
            id={idx + 1}    
          />
        ))}
      </div>
    </>
  );
}*/
