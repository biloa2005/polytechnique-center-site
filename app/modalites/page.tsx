import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Accueil/Footer'
import PricingSection from '../components/Modalités/PricingSection'

function page() {
  return (
    <div>
        <Navbar/>
        <PricingSection/>
        <Footer/>
    </div>
  )
}

export default page