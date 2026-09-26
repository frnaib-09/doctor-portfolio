import React from 'react'

const Contcard = ({icon, adTag, detail}) => {
  return (
    <div className="grid grid-cols-12 gap-2 items-center mb-6">
      <div className="col-span-1">
        <span className="bg-secondary text-2xl rounded-[20px] w-10 h-10 flex justify-center items-center">
          {icon}
        </span>
      </div>
      <div className="col-span-11">
        <h5 className="font-primary font-semibold text-lg text-primary mb-1">
          {adTag}
        </h5>
        <p className='font-primary font-normal text-base text-third'>{detail}</p>
      </div>
    </div>
  );
}

export default Contcard