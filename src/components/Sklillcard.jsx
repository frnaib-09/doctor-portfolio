import React from 'react'

const Sklillcard = ({icon, title, desc}) => {
  return (
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 w-full max-w-full rounded-2xl p-5 sm:p-6 lg:p-8 bg-secondary shade duration-150 ease-in-out">
        <span className="bg-fourth rounded-3xl text-2xl w-12 h-12 flex justify-center items-center mb-5">
          {icon}
        </span>
        <h3 className="font-secondary font-semibold text-lg sm:text-xl text-primary mb-2 text-balance">
          {title}
        </h3>
        <p className="font-primary font-normal text-base leading-[150%] text-third">
          {desc}
        </p>
      </div>
  );
}

export default Sklillcard