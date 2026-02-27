import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{
      background: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #ddd"
    }}>
      <div>Welcome, {user?.email}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}