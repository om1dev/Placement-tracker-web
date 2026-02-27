import Layout from "../../components/Layout";

export default function AdminDashboard() {
  return (
    <Layout>
      <h2 style={{ marginBottom: "20px" }}>Admin Dashboard</h2>

      {/* Overall Stats */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <Card title="Total Students" value="480" />
        <Card title="Placed Students" value="320" />
        <Card title="Companies Visited" value="45" />
        <Card title="Placement Rate" value="66%" />
      </div>

      {/* Package Details */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <Card title="Highest Package" value="18 LPA" />
        <Card title="Average Package" value="6.5 LPA" />
      </div>

      {/* Department-wise Stats */}
      <div style={{ background: "white", padding: "20px" }}>
        <h3>Department-wise Placement</h3>
        <table width="100%" border="1" cellPadding="10" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Department</th>
              <th>Total Students</th>
              <th>Placed</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer</td>
              <td>120</td>
              <td>110</td>
              <td>91%</td>
            </tr>
            <tr>
              <td>IT</td>
              <td>100</td>
              <td>80</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Mechanical</td>
              <td>150</td>
              <td>90</td>
              <td>60%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      flex: 1,
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}   