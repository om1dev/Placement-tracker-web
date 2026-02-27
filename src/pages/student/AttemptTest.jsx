import Layout from "../../components/Layout";
import { useState } from "react";

export default function AttemptTest() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "B";

  const handleSubmit = () => {
    const score = selected === correctAnswer ? 100 : 0;

    // Get previous scores
    const previousScores = JSON.parse(localStorage.getItem("testScores")) || [];

    previousScores.push(score);

    localStorage.setItem("testScores", JSON.stringify(previousScores));

    setSubmitted(true);
  };

  return (
    <Layout>
      <h2>Aptitude Test</h2>

      {!submitted ? (
        <>
          <p>What is 5 + 3?</p>

          <div>
            <label>
              <input
                type="radio"
                value="A"
                onChange={(e) => setSelected(e.target.value)}
              />
              A) 6
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                value="B"
                onChange={(e) => setSelected(e.target.value)}
              />
              B) 8
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                value="C"
                onChange={(e) => setSelected(e.target.value)}
              />
              C) 10
            </label>
          </div>

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "15px",
              padding: "8px 15px",
              background: "#2563eb",
              color: "white",
              border: "none",
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <h3>
          {selected === correctAnswer
            ? "Correct! Score: 100%"
            : "Wrong Answer. Score: 0%"}
        </h3>
      )}
    </Layout>
  );
}
