import { useAuth } from "../context/authContext";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
export default function Topbar({  setRole }) {
    
  
  const { user, loading, setUser } = useAuth();
  const navigate = useNavigate();
  
  if (loading) return null;
  
  const role = user?.Role; // president / manager / user
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
      {user && <button
       onClick={async ()=>{
        await logout();
        setUser(null);
        navigate("/login");

       }}
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
        logout
      </button>}
    </div>
  );
}
