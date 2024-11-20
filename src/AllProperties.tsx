import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import Footer from './Components/Footer.tsx'
import AllProperties from './Components/AllProperties.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <AllProperties />
      <Footer />
    </>
  </React.StrictMode>,
)
