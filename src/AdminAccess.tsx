import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminSidebar from "./Components/AdminSidebar.tsx";
import AdminAccess from "./Components/AdminAccess.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <div className="aayiram" style={{ display: 'flex' }}>
        <AdminSidebar activeItem="Admin Access" />
        <AdminAccess />
      </div>
    </>
  </React.StrictMode>
);
