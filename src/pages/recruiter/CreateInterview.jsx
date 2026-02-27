import Layout from "../../components/Layout";
import { useState } from "react";

export default function CreateInterview() {
  const [slot, setSlot] = useState({
    candidate: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setSlot({ ...slot, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Interview Scheduled (Frontend Only)");
  };

  return (
    <Layout>
      <h2>Schedule Interview</h2>

      <div style={{ background: "white", padding: "20px", marginTop: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Candidate Name</label><br />
          <input name="candidate" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Date</label><br />
          <input type="date" name="date" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Time</label><br />
          <input type="time" name="time" onChange={handleChange} />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Schedule Interview
        </button>
      </div>
    </Layout>
  );
}