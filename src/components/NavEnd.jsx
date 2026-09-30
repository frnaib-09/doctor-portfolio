import React from 'react' 
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const NavEnd = () => {
  return (
    <div className='block shrink-0 mt-5 lg:mt-0'>
      <Link className="primary_btn" to="/contact">Book Appointment <FaArrowRight /></Link>
    </div>
  );
}

export default NavEnd