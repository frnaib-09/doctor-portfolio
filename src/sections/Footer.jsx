import React from 'react'
import { LiaHeartbeatSolid } from "react-icons/lia";
import { FaLinkedin } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
  const navPoints = [
    {name: "Home",
      url: "#"
    },
    {name: "About",
      url: "#"
    },
    {name: "Skills",
      url: "#"
    },
    {name: "Testimonials",
      url: "#"
    },
  ]
  return (
    <div className="pt-10 lg:pt-20 pb-5 lg:pb-10 px-10 lg:px-20 bg-primary">
      <div className="grid grid-cols-12 items-center mb-16">
        <div className="col-span-12 lg:col-span-6 justify-between items-center mb-8 lg:mb-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-secondary w-9 h-9 flex justify-center items-center rounded-[18px]">
              <LiaHeartbeatSolid className="w-6 h-6 text-primary"></LiaHeartbeatSolid>
            </span>
            <div className="navName">
              <h1 className="font-secondary font-bold text-[18px] mb-0.5 text-secondary">
                Dr. Elena Gomez
              </h1>
            </div>
          </div>
          <p className="font-primary font-normal text-base leading-[15-%] text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum
            repellendus quae dolores expedita maiores ratione aperiam ab cum.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 text-start justify-start lg:justify-end flex gap-20">
          <ul className="flex flex-col gap-4">
            <li className="font-primary font-semibold text-sm uppercase text-secondary">
              practice
            </li>
            {navPoints.map((point, index) => (
              <li key={index}>
              <a
                className="font-primary font-normal text-base text-secondary opacity-[0.8] hover:opacity-100 duration-200 ease-in"
                href="{point.url}"
              >
                {point.name}
              </a>
            </li>
            ))}
            
          </ul>
          <ul className='flex flex-col gap-4'>
            <li className="font-primary font-semibold text-sm uppercase text-secondary">
              social
            </li>
            <div className="flex gap-6">
                <li>
                  <a href="#">
                    <FaLinkedin className='text-3xl text-secondary opacity-[0.8] hover:opacity-100 duration-200 ease-in' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaResearchgate className='text-3xl text-secondary opacity-[0.8] hover:opacity-100 duration-200 ease-in' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GrInstagram className='text-3xl text-secondary opacity-[0.8] hover:opacity-100 duration-200 ease-in' />
                  </a>
                </li>
            </div>
          </ul>
        </div>
      </div>
      <hr className='text-third mb-8' />
      <div className="grid grid-cols-12 items-center justify-between">
        <div className="col-span-12 lg:col-span-6 justify-center">
            <p className='text-secondary opacity-[0.5]'>&copy; 2026 Dr. Elena Gomez. All rights reserved.</p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end gap-6">
          <a href='#' className='text-secondary opacity-[0.5] hover:opacity-100 duration-200 ease-in'>Privacy Policy</a>
          <a href='#' className='text-secondary opacity-[0.5] hover:opacity-100 duration-200 ease-in'>Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer