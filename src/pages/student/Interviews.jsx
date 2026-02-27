import Layout from "../../components/Layout";

export default function Interviews() {
  const interviews = [
    {
      company: "TCS",
      role: "Backend Developer",
      date: "2026-03-02",
      time: "10:30 AM",
      status: "Scheduled"
    }
  ];

  return (
    <Layout>
      <h2>My Interviews</h2>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px", background: "white" }}
      >
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.role}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}