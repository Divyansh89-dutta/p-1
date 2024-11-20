import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import PropertyDetail from './Components/PropertyDetail.tsx'
import Footer from './Components/Footer.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
    
      <PropertyDetail />
      <Footer />
    </>
  </React.StrictMode>,
)
