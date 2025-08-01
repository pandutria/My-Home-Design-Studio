import React from 'react'
import Navbar from '../components/Navbar.tsx'
import Home from '../sections/Home.tsx'
import About from '../sections/About.tsx'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default Landing
