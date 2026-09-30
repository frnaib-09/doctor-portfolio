import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav';
import Heading from '../components/Heading';
import Specialities from '../sections/Specialities';
import Credentials from '../sections/Credentials';
import Learning from '../sections/Learning';
import Footer from '../sections/Footer'

const Skills = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Heading
        className="page-head"
        headline={"Skills & Certifications"}
      />
      <Specialities />
      <Credentials />
      <Learning />
      <Footer />
    </div>
  );
}

export default Skills