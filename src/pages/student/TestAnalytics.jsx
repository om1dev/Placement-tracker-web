import Layout from "../../components/Layout";

export default function TestAnalytics() {
  const scores =
    JSON.parse(localStorage.getItem("testScores")) || [];

  const totalTests = scores.length;
  const average =
    totalTests > 0
      ? Math.round(scores.reduce((a, b) => a + b, 0) / totalTests)
      : 0;
  const best = totalTests > 0 ? Math.max(...scores) : 0;

  return (
    <Layout>
      <h2>Test Analytics</h2>

      <div style={{ background: "white", padding: "20px", marginTop: "20px" }}>
        <p>Total Tests Attempted: {totalTests}</p>
        <p>Average Score: {average}%</p>
        <p>Best Score: {best}%</p>
      </div>
    </Layout>
  );
}