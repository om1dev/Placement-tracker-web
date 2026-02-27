import Layout from "../../components/Layout";
import { useState } from "react";

export default function CreateTest() {
  const [testName, setTestName] = useState("");

  const handleSubmit = () => {
    alert("Test Created (Frontend Only)");
  };

  return (
    <Layout>
      <h2>Create Test</h2>

      <div style={{ background: "white", padding: "20px", marginTop: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Test Name</label><br />
          <input
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Create Test
        </button>
      </div>
    </Layout>
  );
}