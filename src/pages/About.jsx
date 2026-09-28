import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav'
import AboutPage from '../sections/AboutPage'


const About = () => {
  return (
    <div>
        <Navbar className="hidden lg:flex" />
        <MobileNav className="flex lg:hidden" />
        <AboutPage />
    </div>
  )
}

export default About