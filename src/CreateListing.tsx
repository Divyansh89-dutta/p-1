import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import ListingForm from './Components/ListingForm.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <ListingForm />
    </>
  </React.StrictMode>,
)
