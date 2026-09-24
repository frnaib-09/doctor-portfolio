import React from 'react'
import Navbar from '../sections/Navbar'
import Banner from '../sections/Banner'
import MobileNav  from '../sections/MobileNav'

const Home = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex"></Navbar>
      <MobileNav className="flex lg:hidden"></MobileNav>
      <Banner />
    </div>
  )
}

export default Home