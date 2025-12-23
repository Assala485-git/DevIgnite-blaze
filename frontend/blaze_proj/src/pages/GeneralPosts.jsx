import { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import PostCard from "../components/PostCard";
import { getGeneralPosts } from "../services/api";
import { useAuth } from "../context/authContext";

export default function GeneralPosts() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const role = user?.Role || "user";
  const isPresident = role === "president";

  const [genPosts, setGenPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGeneralPosts()
      .then((res) => setGenPosts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (authLoading || loading) return <p style={{ color: "white" }}>Loading...</p>;

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
      <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff" }}>
        General Posts
      </h1>

      {/* BUTTONS (SAME LOGIC AS ALL POSTS) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "25px",
        }}
      >
        <div>
          {isPresident && (
            <button
              style={buttonStyle}
              onClick={() => navigate("/create-post")}
            >
              + Create Post
            </button>
          )}
        </div>

        <button style={buttonStyle}>
          <FiShare2 size={16} /> Share
        </button>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {genPosts.map((post) => (
          <PostCard
            key={post._id}
            id={post._id}
            title={post.title}
            description={post.content}
            tag="GENERAL"
            dep={null}
            role={role}
            image={post.image}
            onDelete={role==="president"}
          />
        ))}
      </div>
    </>
  );
}
