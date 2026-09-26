import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";

const Specialities = () => {
  return (
    <div className='py-30 px-20 bg-fifth'>
        <h6 className='head_title'>clinical specialities</h6>
        <div className="flex justify-between items-end">
            <h1 className='head_exp mt-4'>Comprehensive Cardiovascular <br /> Specialties</h1>
            <a className='primary_btn' href="#">View All Services</a>
        </div>
        <div className="cards mt-14">
            <div className="grid grid-cols-12">
                <div className="col-span-4 rounded-2xl p-8 bg-secondary shade duration-150 ease-in-out">
                    <span className='bg-fourth rounded-3xl text-2xl w-12 h-12 flex justify-center items-center mb-5'><TbActivityHeartbeat /></span>
                    <h3 className='font-secondary font-semibold text-xl text-primary mb-2'>Interventional Cardiology</h3>
                    <p className='font-primary font-normal text-base leading-[150%] text-third'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ipsam itaque quaerat facere, sed ut voluptates dicta amet veritatis, laborum nam dolor eligendi.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Specialities