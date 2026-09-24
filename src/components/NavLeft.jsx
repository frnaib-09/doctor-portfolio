import React from 'react'
import { LiaHeartbeatSolid } from "react-icons/lia";



const NavLeft = () => {
  return (
    <div className="flex items-center gap-3 {}">
      <span className="bg-primary w-9 h-9 flex justify-center items-center rounded-[18px]">
        <LiaHeartbeatSolid className="w-6 h-6 text-secondary"></LiaHeartbeatSolid>
      </span>
      <div className="navName">
        <h1 className="font-secondary font-bold text-[18px] mb-0.5">
          Dr. Elena Gomez
        </h1>
        <p className="font-primary font-semibold text-xs uppercase text-[#768c7f]">
          Cardiology Specialist
        </p>
      </div>
    </div>
  );
}

export default NavLeft