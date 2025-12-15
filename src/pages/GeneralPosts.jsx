import PostCard from "../components/PostCard";

export default function GeneralPosts() {
  return (
    <>
      <h1 style={{ color: "white", marginBottom: "20px" }}>
        General Posts
      </h1>

      <div className="posts-grid">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}
