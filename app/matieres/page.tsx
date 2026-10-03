import React from 'react'
import SubjectsSection from '../components/matieres/SubjectsSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Accueil/Footer'

function page() {
  return (
    <div>
        <Navbar/>
        <SubjectsSection/>
        <Footer/>
    </div>
  )
}

export default page