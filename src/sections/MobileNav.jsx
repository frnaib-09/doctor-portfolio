import React, { useState } from "react";
import NavLeft from "../components/NavLeft";
import { HiMenuAlt3 } from "react-icons/hi";

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
    </div>
  );
};

export default MobileNav;
