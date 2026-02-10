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

// Protected Route
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <Router>
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

        {/* ONLY SUPERADMIN */}
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
