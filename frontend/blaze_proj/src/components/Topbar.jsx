export default function Topbar() {
  return (
    <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <input
          type="text"
          placeholder="Search for anything..."
          style={{
            width: "45%",
            background: "transparent",
            border: "1px solid #6C777E",
            borderRadius: "8px",
            padding: "10px 15px",
            color: "#fff",
            fontSize: "14px",
            outline: "none",
          }}
        />
      </div>
  );
}

      