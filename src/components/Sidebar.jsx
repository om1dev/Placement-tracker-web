import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div
      style={{
        width: "220px",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Placement</h3>

      {user.role === "student" && (
        <>
          <Link
            to="/student"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Dashboard
          </Link>
          <Link
            to="/student/applications"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Applications
          </Link>
          <Link
            to="/student/interviews"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Interviews
          </Link>
          <Link
            to="/student/test"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Attempt Test
          </Link>
          <Link
            to="/student/resume"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Resume & Skill Gap
          </Link>
          <Link
            to="/student/book-slot"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Book Interview Slot
          </Link>
          <Link
            to="/student/test-analytics"
            style={{ color: "white", display: "block", margin: "10px 0" }}  
          >
            Test Analytics
          </Link>
        </>
      )}

      {user.role === "recruiter" && (
        <>
          <Link
            to="/recruiter"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Dashboard
          </Link>
          <Link
            to="/recruiter/post-job"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Post Job
          </Link>
          <Link
            to="/recruiter/schedule"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Schedule Interview
          </Link>
          <Link
            to="/recruiter/create-test"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Create Test
          </Link>
        </>
      )}

      {user.role === "admin" && (
        <>
          <Link
            to="/admin"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            style={{ color: "white", display: "block", margin: "10px 0" }}
          >
            Manage Users
          </Link>
        </>
      )}
    </div>
  );
}
