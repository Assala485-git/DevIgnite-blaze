import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addGeneralPost } from "../services/api";

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
  e.preventDefault();
  const postData = {
    title,
    content,
    imageFile: image, // from <input type="file" />
  };
  addGeneralPost(postData)
    .then(res => {console.log(res.data);
      navigate("/general");
    })
    .catch(err => console.error(err));
};


  return (
    <div style={{ width: "100%", maxWidth: "520px", margin: "0 auto" }}>
      <h1 style={{ color: "#fff", fontSize: "32px", marginBottom: "30px" }}>
        Create Post
      </h1>

      <form onSubmit={handleSubmit}>
        {/* TITLE */}
        <Input
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Post description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={textarea}
          required
        />

        {/* IMAGE */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={file}
        />

        {/* BUTTON */}
        <button type="submit" style={button}>
          Create Post
        </button>
      </form>
    </div>
  );
}

const Input = (props) => (
  <input {...props} required style={input} />
);

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "16px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(180deg, #1e293b, #111827)",
  color: "#fff",
};

const textarea = {
  ...input,
  height: "120px",
  resize: "none",
};

const file = {
  marginBottom: "24px",
  color: "#9CA3AF",
};

const button = {
  width: "100%",
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  background: "#3B82F6",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};
