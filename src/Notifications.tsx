import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './Components/Footer.tsx'
import ProfileNav from './Components/ProfileNav.tsx'
import MyFavorites from './Components/MyFavorites.tsx'
import Notifications from './Components/Notifications.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <ProfileNav initialActiveIcon='bell'/>
      <Notifications />
      <Footer />
    </>
  </React.StrictMode>,
)