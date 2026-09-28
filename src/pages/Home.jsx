import React from 'react'
import Navbar from '../sections/Navbar'
import Banner from '../sections/Banner'
import MobileNav  from '../sections/MobileNav'
import Summary from '../sections/Summary'
import About from '../sections/AboutPage'
import Specialities from '../sections/Specialities'
import Reviews from '../sections/Reviews'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Banner />
      <Summary />
      <About />
      <Specialities />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home