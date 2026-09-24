import React from 'react'
import NavLeft from '../components/NavLeft'
import NavMiddle from '../components/NavMiddle'
import NavEnd from '../components/NavEnd'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 lg:py-6.25 px-10 lg:px-20 bg-secondary fixed w-full top-0 left-0 border-b border-[#e5e1d8] z-50">
      <NavLeft />
      <NavMiddle />
      <NavEnd />
    </nav>
  );
}

export default Navbar