import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-quill/dist/quill.snow.css";
import { AuthProvider } from "./auth/AuthContext";
import { KnowledgeProvider } from "./knowledge/KnowledgeContext";

import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <KnowledgeProvider>
      <App />
    </KnowledgeProvider>
  </AuthProvider>
);
