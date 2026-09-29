import React from 'react'

const ConfPlate = ({graduation, inst, gtype, pra}) => {
  return (
    <div className="plate block lg:flex gap-6 items-center bg-secondary border border-[#e5e1d8] rounded-xl p-3 lg:p-6 mb-4 shade duration-150 ease-in-out">
      <span className="pr-6 pl-6 lg:pl-0 font-primary font-semibold text-sm uppercase text-[#768c7f]">
        {graduation}
      </span>
      <div className="block pl-6 lg:pl-12 border-l border-[#e5e1d8] mt-4 lg:mt-0">
        <div className="flex items-center gap-3">
          <h4 className="font-secondary font-bold text-xl text-primary">
            {inst}
          </h4>
          <h6 className="rounded-[100px] bg-fourth py-0.5 px-2.5 font-primary font-bold text-xs text-primary">
            {gtype}
          </h6>
        </div>
        <p className="font-primary font-normal text-sm text-third">
          {pra}
        </p>
      </div>
    </div>
  );
}

export default ConfPlate