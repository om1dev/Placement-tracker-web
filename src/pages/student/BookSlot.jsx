import Layout from "../../components/Layout";
import { useState } from "react";

export default function BookSlot() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const availableSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "2:00 PM - 2:30 PM"
  ];

  const handleConfirm = () => {
    if (!selectedSlot) {
      alert("Please select a slot first");
      return;
    }
    setConfirmed(true);
  };

  return (
    <Layout>
      <h2>Book Interview Slot</h2>

      <div style={{ background: "white", padding: "20px", marginTop: "20px" }}>
        
        <h3>Available Slots</h3>

        {availableSlots.map((slot, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="radio"
                name="slot"
                value={slot}
                onChange={(e) => setSelectedSlot(e.target.value)}
              />
              {" "} {slot}
            </label>
          </div>
        ))}

        <button
          onClick={handleConfirm}
          style={{
            marginTop: "15px",
            padding: "8px 15px",
            background: "#16a34a",
            color: "white",
            border: "none"
          }}
        >
          Confirm Slot
        </button>

        {confirmed && (
          <h3 style={{ marginTop: "20px" }}>
            Slot Confirmed: {selectedSlot}
          </h3>
        )}
      </div>
    </Layout>
  );
}