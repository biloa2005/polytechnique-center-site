import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Accueil/Footer'
import AboutSection from '../components/a-propos/AboutSection'
import FoundersSection from '../components/a-propos/FoundersSection'

export default function page() {
  return (
    <div>
      <Navbar/>
      <AboutSection/>
      <FoundersSection/>
      <Footer/>
    </div>
  )
}
