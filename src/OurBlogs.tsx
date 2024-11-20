import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './Components/Footer.tsx'
import Navbar from './Components/Navbar.tsx'
import OurBlogs from './Components/OurBlogs.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <OurBlogs />
      <Footer />
    </>
  </React.StrictMode>,
)
