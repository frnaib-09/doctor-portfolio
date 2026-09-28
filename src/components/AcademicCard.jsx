import React from 'react'

const AcademicCard = ({year, degree, inst, detailed}) => {
  return (
    <div className="grid grid-cols-12 justify-center items-start text-start mb-12">
      <div className="col-span-5">
        <h2 className="text-center font-primary font-bold text-lg text-third">
          {year}
        </h2>
      </div>
      <div className="col-span-2">
        <div className="circle bg-primary w-4 h-4 rounded-full relative after:content-[''] after:absolute after:border-2 after:border-[#e5e1d8] after:w-10 after:bottom-0 after:-right-3"></div>
      </div>
      <div className="col-span-5">
        <h1 className="font-secondary font-bold text-[22px] text-primary">
          {degree}
        </h1>
        <h6 className="font-primary font-semibold text-sm uppercase text-third my-2">
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