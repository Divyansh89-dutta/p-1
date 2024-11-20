import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminSidebar from "./Components/AdminSidebar.tsx";
import DocWrite from "./Components/DocWrite.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <div className="aayiram" style={{ display: 'flex' }}>
        <AdminSidebar activeItem="Document Submission" />
        <DocWrite />
      </div>
    </>
  </React.StrictMode>
);