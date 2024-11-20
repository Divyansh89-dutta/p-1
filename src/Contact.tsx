import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar.tsx";
import Footer from "./Components/Footer.tsx";
import ContactPage from "./Components/ContactPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  </React.StrictMode>
);
