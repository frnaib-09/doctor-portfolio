import React from 'react'

const Contcard = ({icon, adTag, detail}) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
      <span className="shrink-0 bg-secondary text-2xl rounded-[20px] w-10 h-10 flex justify-center items-center">
        {icon}
      </span>
      <div className="min-w-0">
        <h5 className="font-primary font-semibold text-base sm:text-lg text-primary mb-1">
          {adTag}
        </h5>
        <p className='font-primary font-normal text-sm sm:text-base text-third'>{detail}</p>
      </div>
    </div>
  );
}

export default Contcard