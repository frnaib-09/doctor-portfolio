import React from 'react'
import Navbar from '../sections/Navbar'
import Banner from '../sections/Banner'
import MobileNav  from '../sections/MobileNav'
import Summary from '../sections/Summary'
import About from '../sections/About'
import Specialities from '../sections/Specialities'

const Home = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex"></Navbar>
      <MobileNav className="flex lg:hidden"></MobileNav>
      <Banner />
      <Summary />
      <About />
      <Specialities />
    </div>
  )
}

export default Home