import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar.tsx";
import Login from "./Components/Login.tsx";
import AdminNavbar from "./Components/AdminNavbar.tsx";
import AdminLogin from "./Components/AdminLogin.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
     <AdminLogin />
    </>
  </React.StrictMode>
);
