import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import SignUp from './Components/SignUp.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <SignUp />
      
    </>
  </React.StrictMode>,
)
