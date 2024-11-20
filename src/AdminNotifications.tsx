import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminSidebar from "./Components/AdminSidebar.tsx";
import Notifications from "./Components/Notifications.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <div className="aayiram" style={{ display: "flex" }}>
        <AdminSidebar activeItem="Blogs & Articles" />
        <div className="adminnotifications" style={{marginLeft: "-5rem"}}>
          <Notifications />
        </div>
      </div>
    </>
  </React.StrictMode>
);
