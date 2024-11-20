import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './Components/Footer.tsx'
import MyProfileElement from './Components/MyProfileElement.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <MyProfileElement />
      <Footer />
    </>
  </React.StrictMode>,
)
