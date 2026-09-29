import React, { useState } from "react";
import NavLeft from "../components/NavLeft";
import { HiMenuAlt3 } from "react-icons/hi";
import NavMiddle from "../components/NavMiddle";
import { RxCross1 } from "react-icons/rx";

const MobileNav = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`fixed w-full mx-auto top-0 ${className} left-0 z-50 bg-secondary py-4 px-4`}
    >
      <div className="grid grid-cols-12 w-full">
        <NavLeft className="col-span-9"></NavLeft>
        <button
          onClick={() => setOpen(true)}
          className="col-span-3 flex justify-end items-center"
        >
          <HiMenuAlt3 className="text-2xl" />
        </button>
      </div>
      <div
        className={`offcanvas ${!open ? "bg-transparent pointer-events-none" : "bg-gray-700/70"} w-full h-full top-0 left-0 fixed`}
      >
        <NavMiddle
          className={`bg-white w-[80%] h-full absolute right-0 top-0 p-12 ${!open ? "scale-x-0" : "scale-x-100"} origin-center duration-300 transform transition-transform`}
        ></NavMiddle>
        <RxCross1 onClick={() => setOpen(false)} className={`absolute text-primary text-2xl top-6 right-10 ${open ? "block" : "hidden"}`} />
      </div>
    </div>
  );
};

export default MobileNav;
