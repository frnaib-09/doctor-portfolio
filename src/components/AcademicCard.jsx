import React from 'react'

const AcademicCard = ({year, degree, inst, detailed}) => {
  return (
    <div className="grid grid-cols-12 justify-center items-start text-start mb-10 sm:mb-12">
      <div className="col-span-12 md:col-span-5">
        <h2 className="text-start md:text-center font-primary font-bold text-base md:text-lg text-third">
          {year}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-2 hidden md:block relative after:content-[''] after:absolute after:left-4 after:bottom-0 after:h-0 after:w-8 after:border-t-2 after:border-[#e5e1d8]">
        <div className="circle shrink-0 bg-primary w-4 h-4 rounded-full"></div>
      </div>
      <div className="col-span-12 md:col-span-5">
        <h1 className="font-secondary font-bold text-xl md:text-[22px] text-primary text-balance">
          {degree}
        </h1>
        <h6 className="font-primary font-semibold text-xs sm:text-sm uppercase text-third my-2">
          {inst}
        </h6>
        <p className="font-primary font-normal text-sm leading-[160%] text-third">
          {detailed}
        </p>
      </div>
    </div>
  );
}

export default AcademicCard