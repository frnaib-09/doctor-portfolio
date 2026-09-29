import React from 'react'

const CertCard = ({year, certificate, ins, course}) => {
  return (
    <div className="col-span-12 lg:col-span-4 p-8 border border-[#e5e1d8] rounded-2xl shade duration-150 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h6 className='py-1 px-3 bg-fourth rounded-sm font-primary font-bold text-sm text-primary'>{year}</h6>
          <span className='font-primay font-medium text-xs text-third'>{certificate}</span>
        </div>
        <h4 className='font-secondary font-bold text-lg text-primary mb-2'>{ins}</h4>
        <p className='font-primary font-normal text-sm text-third'>{course}</p>
      </div>
  )
}

export default CertCard