import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Accueil/Footer'
import ClassesSection from '../components/cours/ClassesSection'

function page() {
  return (
    <div>
        <Navbar/>
        <ClassesSection/>
        <Footer/>
    </div>
  )
}

export default page