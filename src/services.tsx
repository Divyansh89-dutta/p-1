import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import Services from './Components/Services.tsx'
import Footer from './Components/Footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <Services />
      <Footer />
    </>
  </React.StrictMode>,
)
