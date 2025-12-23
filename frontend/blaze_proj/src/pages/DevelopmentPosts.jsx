import { useParams } from "react-router-dom";
import { getDepartment, getPost } from "../services/api";
import { useNavigate } from "react-router-dom"; 
import { useState,useEffect } from "react";
import PostCard from "../components/PostCard";
export default function DevelopmentPosts(name) {
  const { dep } = useParams();
  
  /*const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const role = user?.Role || user?.role || "user";
  const isPresident = role === "president";
  const [loading, setLoading] = useState(true);*/
  const [posts, setPosts] = useState([]);
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    console.log(dep);
    getPost(dep)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
      //.finally(() => setLoading(false));
    getDepartment(dep)
    .then((res) => setDepartment(res.data))
    .catch((err) => console.error(err))
  }, []); 
   return (
    <>
      <div style={{ padding: "20px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
          <div
            style={{
              width: "4px",
              height: "32px",
              background: "#ffffff",
              marginRight: "12px",
              borderRadius: "2px",
            }}
          ></div>

          <h1 style={{ fontSize: "32px", fontWeight: 700, margin: 0 }}>
            {department.name} – Posts
          </h1>
        </div>

        <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                }}
              >
                {posts.map((post) => (
                  <PostCard
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    description={post.content}
                    tag="GENERAL"
                    dep={null}
                    
                    image={post.image}
                  />
                ))}
              </div>
        

        
      </div>
    </>
  );
}
