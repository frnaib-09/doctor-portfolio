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
    <div data-aos="fade-up" className="w-full max-w-full pt-10 pb-5 sm:pb-6 lg:pt-20 lg:pb-10 px-5 sm:px-8 lg:px-20 bg-primary">
      <div className="grid grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12 mb-12 lg:mb-16">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="shrink-0 bg-secondary w-9 h-9 flex justify-center items-center rounded-[18px]">
              <LiaHeartbeatSolid className="w-6 h-6 text-primary"></LiaHeartbeatSolid>
            </span>
            <div className="navName">
              <h1 className="font-secondary font-bold text-lg sm:text-[18px] mb-0.5 text-secondary">
                Dr. Elena Gomez
              </h1>
            </div>
          </div>
          <p className="font-primary font-normal text-base leading-[150%] text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden sm:block" /> Eum
            repellendus quae dolores expedita maiores ratione aperiam ab cum.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-8 sm:gap-10 lg:justify-end">
          <ul className="flex flex-col gap-4">
            <li className="font-primary font-semibold text-sm uppercase text-secondary">
              practice
            </li>
            {navPoints.map((point, index) => (
              <li key={index}>
                <a
                  className="font-primary font-normal text-base text-secondary opacity-[0.6] hover:opacity-100 duration-200 ease-in"
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
            <div className="flex flex-row lg:flex-row gap-6">
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin className='text-3xl text-secondary opacity-[0.6] hover:opacity-100 duration-200 ease-in' />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="ResearchGate">
                    <FaResearchgate className='text-3xl text-secondary opacity-[0.6] hover:opacity-100 duration-200 ease-in' />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <GrInstagram className='text-3xl text-secondary opacity-[0.6] hover:opacity-100 duration-200 ease-in' />
                  </a>
                </li>
            </div>
          </ul>
        </div>
      </div>
      <hr className='text-third mb-8' />
      <div className="grid grid-cols-12 items-center justify-between gap-4">
        <div className="col-span-12 lg:col-span-6">
            <p className='text-secondary opacity-[0.5] text-sm'>&copy; 2026 Dr. Elena Gomez. All rights reserved.</p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-wrap justify-start lg:justify-end gap-x-6 gap-y-2 text-sm">
          <a href='#' className='text-secondary opacity-[0.5] hover:opacity-100 duration-200 ease-in'>Privacy Policy</a>
          <a href='#' className='text-secondary opacity-[0.5] hover:opacity-100 duration-200 ease-in'>Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer