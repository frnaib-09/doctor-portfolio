import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav';
import Heading from '../components/Heading';
import Specialities from '../sections/Specialities';
import Credentials from '../sections/Credentials';

const Skills = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Heading
        className="mt-25 py-12 px-20 font-secondary font-bold text-[42px]"
        headline={"Skills & Certifications"}
      />
      <Specialities />
      <Credentials />
    </div>
  );
}

export default Skills