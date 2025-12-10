import DashboardLayout from "../layouts/DashboardLayout";
import PostCard from "../components/PostCard";
import { FiFilter, FiCalendar, FiShare2, FiMoreVertical } from "react-icons/fi";

export default function DevelopmentPosts() {
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
    gap: "8px"
  };

  return (
    <DashboardLayout>

     

      {/* TITLE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            width: "4px",
            height: "32px",
            background: "#ffffff",
            marginRight: "12px",
            borderRadius: "2px",
          }}
        ></div>

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#ffffff",
            margin: 0,
          }}
        >
          Development Department Posts
        </h1>
      </div>

     {/* BUTTONS ROW */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "25px",
  }}
>
  {/* LEFT BUTTONS */}
  <div style={{ display: "flex", gap: "15px" }}>
    <button style={buttonStyle}>
      <FiFilter size={16} /> Filter ▾
    </button>

    <button style={buttonStyle}>
      <FiCalendar size={16} /> Today ▾
    </button>
  </div>

  {/* RIGHT BUTTONS */}
  <div style={{ display: "flex", gap: "15px" }}>
    <button style={buttonStyle}>
      <FiShare2 size={16} /> Share
    </button>

    <button style={buttonStyle}>
      <FiMoreVertical size={18} />
    </button>
  </div>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    marginTop: "20px",
  }}
>

  <PostCard hasImages={true} />
  <PostCard hasImages={false} />
  <PostCard hasImages={true} />

  <PostCard hasImages={false} />
  <PostCard hasImages={true} />
  <PostCard hasImages={false} />

  <PostCard hasImages={true} />
  <PostCard hasImages={false} />
  <PostCard hasImages={true} />
</div>



    </DashboardLayout>
  );
}
