import React from 'react'

const NetCard = ({memship, company, explain}) => {
  return (
    <div
      data-aos="fade-up-right"
      className="col-span-12 sm:col-span-6 lg:col-span-3 card w-full max-w-full p-5 sm:p-6 lg:p-8 bg-fifth text-start rounded-2xl shade duration-150 ease-in-out"
    >
      <span  className="inline-block bg-secondary py-1 px-3 font-primary font-bold text-xs uppercase text-third">
        {memship}
      </span>
      <h5 className="mt-5 font-secondary font-bold text-base sm:text-lg text-primary text-balance">
        {company}
      </h5>
      <p className="font-primary font-normal text-sm leading-[150%] text-third mt-4">
        {explain}
      </p>
    </div>
  );
}

export default NetCard