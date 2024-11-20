import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import HeroSection from './Components/HeroSection.tsx'
import AboutElement from './Components/AboutElement.tsx'
import ServiceOffer from './Components/ServiceOffer.tsx'
import PopularProps from './Components/PopularProps.tsx'
import TestimonialElement from './Components/TestimonialElement.tsx'
import Consultation from './Components/Consultation.tsx'
import Footer from './Components/Footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <HeroSection />
      <AboutElement />
      <ServiceOffer />
      <PopularProps />
      <TestimonialElement />
      <Consultation />
      <Footer />
    </>
  </React.StrictMode>,
)
