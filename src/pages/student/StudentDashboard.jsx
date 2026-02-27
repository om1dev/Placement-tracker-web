import { useEffect, useState } from "react";
import API from "../../api/axios";
import Layout from "../../components/Layout";

export default function StudentDashboard() {
  const [jobs, setJobs] = useState([]);

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

  const applyToJob = async (jobId) => {
    try {
      await API.post("/applications", { jobId });
      alert("Applied Successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Error applying");
    }
  };

  return (
    <Layout>
      <h2>Available Jobs</h2>

      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
            background: "white",
          }}
        >
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Package: {job.package} LPA</p>

          <button onClick={() => applyToJob(job._id)}>
            Apply
          </button>
        </div>
      ))}
    </Layout>
  );
}