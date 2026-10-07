import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Accueil/Footer'
import AboutSection from '../components/a-propos/AboutSection'

export default function page() {
  return (
    <div>
      <Navbar/>
      <AboutSection/>
      <Footer/>
    </div>
  )
}
