import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleVerify = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        {
          email: location.state.email,
          otp,
        },
      );

      login(res.data);

      if (res.data.role === "student") {
        navigate("/student");
      } else if (res.data.role === "recruiter") {
        navigate("/recruiter");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      alert(error.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleVerify}>Verify OTP</button>
    </div>
  );
}
