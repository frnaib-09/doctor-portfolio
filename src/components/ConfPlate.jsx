import React from 'react'

const ConfPlate = ({graduation, inst, gtype, pra}) => {
  return (
    <div className="plate block lg:flex gap-4 lg:gap-6 items-center w-full max-w-full bg-secondary border border-[#e5e1d8] rounded-xl p-4 sm:p-5 lg:p-6 mb-4 shade duration-150 ease-in-out">
      <span className="pr-2 sm:pr-6 font-primary font-semibold text-xs sm:text-sm uppercase text-[#768c7f]">
        {graduation}
      </span>
      <div className="block pl-4 sm:pl-6 lg:pl-12 border-l border-[#e5e1d8] mt-4 lg:mt-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <h4 className="font-secondary font-bold text-lg sm:text-xl text-primary text-balance">
            {inst}
          </h4>
          <h6 className="rounded-[100px] bg-fourth py-0.5 px-2.5 font-primary font-bold text-xs text-primary whitespace-nowrap">
            {gtype}
          </h6>
        </div>
        <p className="font-primary font-normal text-sm text-third mt-1">
          {pra}
        </p>
      </div>
    </div>
  );
}

export default ConfPlate