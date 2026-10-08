import React from 'react'
import {useEffect} from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav';
import Heading from '../components/Heading';
import Specialities from '../sections/Specialities';
import Credentials from '../sections/Credentials';
import Learning from '../sections/Learning';
import Footer from '../sections/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Heading className="page-head" headline={"Skills & Certifications"} />
      <Specialities />
      <Credentials />
      <Learning />
      <Footer />
    </div>
  );
};

export default Skills