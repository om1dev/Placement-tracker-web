import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import Layout from "../../components/Layout";

export default function ManageApplicants() {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await API.get(`/applications/job/${jobId}`);
      setApplications(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (applicationId, status) => {
    try {
      await API.put(`/applications/${applicationId}`, { status });
      fetchApplications();
    } catch (error) {
      alert(error.response?.data?.message || "Error updating");
    }
  };

  return (
    <Layout>
      <h2>Manage Applicants</h2>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px", background: "white" }}
      >
        <thead>
          <tr>
            <th>Email</th>
            <th>Status</th>
            <th>Score</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.student.email}</td>
              <td>{app.status}</td>
              <td>{app.score}%</td>
              <td>
                <select
                  value={app.status}
                  onChange={(e) =>
                    updateStatus(app._id, e.target.value)
                  }
                >
                  <option>Applied</option>
                  <option>Shortlisted</option>
                  <option>Rejected</option>
                  <option>Selected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}