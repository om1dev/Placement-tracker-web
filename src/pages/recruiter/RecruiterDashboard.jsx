import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import Layout from "../../components/Layout";

export default function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h2 style={{ marginBottom: "20px" }}>Recruiter Dashboard</h2>

      {/* Jobs List */}
      <h3>Your Jobs</h3>

      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginBottom: "15px",
              background: "white",
              borderRadius: "5px"
            }}
          >
            <h3>{job.title}</h3>
            <p>Company: {job.company}</p>
            <p>Package: {job.package} LPA</p>

            <button
              style={{
                padding: "8px 15px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={() =>
                navigate(`/recruiter/applicants/${job._id}`)
              }
            >
              View Applicants
            </button>
          </div>
        ))
      )}
    </Layout>
  );
}