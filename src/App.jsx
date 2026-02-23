import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Knowledge from "./pages/Knowledge";
import AddKnowledge from "./pages/AddKnowledge";
import EditKnowledge from "./pages/EditKnowledge";
import ManageUsers from "./pages/ManageUsers";
import PublicDashboard from "./pages/PublicDashboard";
import PublicKnowledgeDetail from "./pages/PublicKnowledgeDetail";
import Unauthorized from "./pages/Unauthorized";
import AboutDetail from "./pages/AboutDetail";
import SaaS from "./pages/business/SaaS";
import Hardware from "./pages/business/Hardware";
import Consulting from "./pages/business/Consulting";
import LatestUpdates from "./pages/LatestUpdates";

// Protected Route
import ProtectedRoute from "./auth/ProtectedRoute";

// Chatbot FAQ
import FAQChatbot from "./components/FAQChatbot";

function App() {
  return (
    <Router>
      {/* Chatbot akan muncul di semua halaman */}
      <FAQChatbot />

      <Routes>
        {/* Landing */}
        <Route path="/" element={<PublicDashboard />} />

        {/* Public */}
        <Route path="/public" element={<PublicDashboard />} />
        <Route
          path="/public/knowledge/:id"
          element={<PublicKnowledgeDetail />}
        />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Other Pages */}
        <Route path="/about-detail" element={<AboutDetail />} />
        <Route path="/business/saas" element={<SaaS />} />
        <Route path="/business/hardware" element={<Hardware />} />
        <Route path="/business/consulting" element={<Consulting />} />
        <Route path="/latest-updates" element={<LatestUpdates />} />
        <Route path="/knowledge/:id" element={<PublicKnowledgeDetail />} />

        {/* Protected Dashboard (admin + superadmin) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/knowledge"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <Knowledge />
            </ProtectedRoute>
          }
        />

        <Route
          path="/knowledge/add"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <AddKnowledge />
            </ProtectedRoute>
          }
        />

        <Route
          path="/knowledge/edit/:id"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <EditKnowledge />
            </ProtectedRoute>
          }
        />

        {/* SUPERADMIN */}
        <Route
          path="/manage-users"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <ManageUsers />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
