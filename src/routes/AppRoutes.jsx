import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import VerifyOTP from "../pages/auth/VerifyOTP";
import StudentDashboard from "../pages/student/StudentDashboard";
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Applications from "../pages/student/Applications";
import PostJob from "../pages/recruiter/PostJob";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageApplicants from "../pages/recruiter/ManageApplicants";
import CreateInterview from "../pages/recruiter/CreateInterview";
import Interviews from "../pages/student/Interviews";
import CreateTest from "../pages/recruiter/CreateTest";
import AttemptTest from "../pages/student/AttemptTest";
import Resume from "../pages/student/Resume";
import BookSlot from "../pages/student/BookSlot";
import TestAnalytics from "../pages/student/TestAnalytics";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />

        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/applications"
          element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter"
          element={
            <ProtectedRoute>
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/post-job"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/applicants/:jobId"
          element={
            <ProtectedRoute>
              <ManageApplicants />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/schedule"
          element={
            <ProtectedRoute>
              <CreateInterview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/interviews"
          element={
            <ProtectedRoute>
              <Interviews />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/create-test"
          element={
            <ProtectedRoute>
              <CreateTest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/test"
          element={
            <ProtectedRoute>
              <AttemptTest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/resume"
          element={
            <ProtectedRoute>
              <Resume />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/book-slot"
          element={
            <ProtectedRoute>
              <BookSlot />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/test-analytics"
          element={
            <ProtectedRoute>
              <TestAnalytics />
            </ProtectedRoute>
          }
        />

        
      </Routes>
    </BrowserRouter>
  );
}
