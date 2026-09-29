import React from 'react'
import Navbar from "../sections/Navbar";
import MobileNav from "../sections/MobileNav";
import Heading from "../components/Heading";
import Footer from "../sections/Footer";

const Testimonials = () => {
  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Heading
        className="mt-25 py-12 px-20 font-secondary font-bold text-[42px]"
        headline={"Skills & Certifications"}
      />
      <Footer />
    </div>
  );
}

export default Testimonials