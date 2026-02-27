import Layout from "../../components/Layout";
import { useState } from "react";

export default function Resume() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload resume first");
      return;
    }

    // Dummy analysis simulation
    setAnalysis({
      skills: ["Java", "React", "SQL"],
      missing: ["System Design", "Testing"],
      score: "78%"
    });
  };

  return (
    <Layout>
      <h2>Resume Upload & Skill Analysis</h2>

      <div style={{ background: "white", padding: "20px", marginTop: "20px" }}>
        
        <input type="file" onChange={handleFileChange} />
        
        <br /><br />

        <button
          onClick={handleAnalyze}
          style={{
            padding: "8px 15px",
            background: "#2563eb",
            color: "white",
            border: "none"
          }}
        >
          Analyze Resume
        </button>

        {file && <p>Uploaded: {file.name}</p>}

        {analysis && (
          <div style={{ marginTop: "20px" }}>
            <h3>Extracted Skills</h3>
            <ul>
              {analysis.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h3>Missing Skills</h3>
            <ul>
              {analysis.missing.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h3>Readiness Score: {analysis.score}</h3>
          </div>
        )}
      </div>
    </Layout>
  );
}