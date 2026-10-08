import React from 'react'

const CertCard = ({year, certificate, ins, course}) => {
  return (
    <div
      data-aos="fade-up-right"
      className="col-span-12 sm:col-span-6 lg:col-span-4 w-full max-w-full p-5 sm:p-6 lg:p-8 border border-[#e5e1d8] rounded-2xl shade duration-150 ease-in-out"
    >
      <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-1 mb-4">
        <h6 className="py-1 px-3 bg-fourth rounded-sm font-primary font-bold text-sm text-primary">
          {year}
        </h6>
        <span className="font-primary font-medium text-xs text-third">
          {certificate}
        </span>
      </div>
      <h4 className="font-secondary font-bold text-base sm:text-lg text-primary mb-2">
        {ins}
      </h4>
      <p className="font-primary font-normal text-sm text-third">{course}</p>
    </div>
  );
}

export default CertCard