import React from 'react'
import NavLeft from '../components/NavLeft'
import NavMiddle from '../components/NavMiddle'
import NavEnd from '../components/NavEnd'

const Navbar = ({className}) => {
  return (
    <nav
      data-aos="fade-down"
      className={`navbar-x fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 py-2 lg:py-6.25 bg-secondary border-b border-[#e5e1d8] ${className ?? ""}`}
    >
      <NavLeft />
      <NavMiddle />
      <NavEnd />
    </nav>
  );
}

export default Navbar