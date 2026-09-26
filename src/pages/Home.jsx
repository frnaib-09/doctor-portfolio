import React from 'react'
import Navbar from '../sections/Navbar'
import Banner from '../sections/Banner'
import MobileNav  from '../sections/MobileNav'
import Summary from '../sections/Summary'
import About from '../sections/About'
import Specialities from '../sections/Specialities'
import Reviews from '../sections/Reviews'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex"></Navbar>
      <MobileNav className="flex lg:hidden"></MobileNav>
      <Banner />
      <Summary />
      <About />
      <Specialities />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Home