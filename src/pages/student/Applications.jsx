import { useEffect, useState } from "react";
import API from "../../api/axios";
import Layout from "../../components/Layout";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await API.get("/applications/me");
      setApplications(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h2>My Applications</h2>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px", background: "white" }}
      >
        <thead>
          <tr>
            <th>Job</th>
            <th>Company</th>
            <th>Status</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.job.title}</td>
              <td>{app.job.company}</td>
              <td>{app.status}</td>
              <td>{app.score}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}