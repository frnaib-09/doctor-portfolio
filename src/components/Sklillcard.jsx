import React from 'react'

const Sklillcard = ({icon, title, desc}) => {
  return (
      <div className="col-span-12 lg:col-span-4 rounded-2xl p-8 bg-secondary shade duration-150 ease-in-out">
        <span className="bg-fourth rounded-3xl text-2xl w-12 h-12 flex justify-center items-center mb-5">
          {icon}
        </span>
        <h3 className="font-secondary font-semibold text-xl text-primary mb-2">
          {title}
        </h3>
        <p className="font-primary font-normal text-base leading-[150%] text-third">
          {desc}
        </p>
      </div>
  );
}

export default Sklillcard