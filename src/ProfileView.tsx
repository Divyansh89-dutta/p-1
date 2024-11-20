import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './Components/Footer.tsx'
import Navbar from './Components/Navbar.tsx'
import AgentProfile from './Components/AgentProfile.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <AgentProfile />
      <Footer />
    </>
  </React.StrictMode>,
)
