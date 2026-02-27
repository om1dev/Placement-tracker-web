import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      if (!email) {
        alert("Enter email");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/auth/send-otp",
        {
          email,
          name: "User",
          role: "student"
        }
      );

      alert("OTP sent. Check backend console.");

      navigate("/verify-otp", { state: { email } });

    } catch (error) {
      alert(error.response?.data?.message || "Error sending OTP");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSendOTP}>
        Send OTP
      </button>
    </div>
  );
}