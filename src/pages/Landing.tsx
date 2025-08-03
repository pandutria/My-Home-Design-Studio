import React from 'react'
import Navbar from '../components/Navbar.tsx'
import Home from '../sections/Home.tsx'
import Project from '../sections/Project.tsx'
import About from '../sections/About.tsx'
import Service from '../sections/Service.tsx'
import Superiority from '../sections/Superiority.tsx'
import Testimonials from '../sections/Testimonials.tsx'
import Footer from '../components/Footer.tsx'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Superiority/>
      <Project/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Landing
