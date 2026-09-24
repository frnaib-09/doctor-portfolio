import React from 'react'
import NavLeft from '../components/NavLeft'
import NavMiddle from '../components/NavMiddle'
import NavEnd from '../components/NavEnd'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <NavLeft />
        <NavMiddle />
        <NavEnd />
    </div>
  )
}

export default Navbar