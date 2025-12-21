import PostCard from "../components/PostCard";
import { getGeneralPosts } from "../services/api";
import { useState, useEffect } from "react";
export default function GeneralPosts() {
  const [genPosts, setGenPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getGeneralPosts()
        .then((res) => {
          setGenPosts(res.data);
          console.log(genPosts);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
      <h1 style={{ color: "white", marginBottom: "20px" }}>
        General Posts
      </h1>

      <div className="posts-grid">
        {genPosts.map((post) => (
                  <PostCard
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    description={post.content}
                    tag={"general"}
                    dep={post.department || null}
                    /> ))}
      </div>
    </>
  );
}
