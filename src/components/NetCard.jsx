import React from 'react'

const NetCard = ({memship, company, explain}) => {
  return (
    <div className="col-span-12 lg:col-span-3 card p-8 bg-fifth text-start rounded-2xl shade duration-150 ease-in-out">
      <span className="bg-secondary py-1 px-3 font-primary font-bold text-xs uppercase text-third">
        {memship}
      </span>
      <h5 className="mt-5 font-secondary font-bold text-lg text-primary">
        {company}
      </h5>
      <p className="font-primary font-normal text-sm leading-[150%] text-third mt-4">
        {explain}
      </p>
    </div>
  );
}

export default NetCard