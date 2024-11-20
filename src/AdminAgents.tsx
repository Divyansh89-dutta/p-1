import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminSidebar from "./Components/AdminSidebar.tsx";
import AdminAgents from "./Components/AdminAgents.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <div className="aayiram" style={{ display: 'flex' }}>
        <AdminSidebar activeItem="Agents" />
        <AdminAgents />
      </div>
    </>
  </React.StrictMode>
);
