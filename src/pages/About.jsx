import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav'
import Heading from '../components/Heading'
import AboutSection from '../sections/AboutSection'
import Academy from '../sections/Academy'
import Network from '../sections/Network'
import Footer from '../sections/Footer'


const About = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Heading className="page-head" headline={"About Me"} />
      <AboutSection
        headtitle={"Biography"}
        headexp={"A Dedicated Life's Work Focused on Nurturing Heart Health"}
        showExtra= {true}
        showLess= {false}
      />
      <Academy />
      <Network />
      <Footer />
    </div>
  );
}

export default About