export default function Topbar({ role, setRole }) {
  const isPresident = role === "president";

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      {/* SEARCH */}
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

      {/* ROLE TOGGLE BUTTON */}
      <button
        onClick={() => setRole(isPresident ? "user" : "president")}
        style={{
          background: "transparent",
          border: "1px solid #3E424A",
          borderRadius: "8px",
          padding: "8px 14px",
          color: "#ffffff",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        Role: {isPresident ? "President" : "User"}
      </button>
    </div>
  );
}
