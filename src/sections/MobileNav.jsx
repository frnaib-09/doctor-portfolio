import React, { useEffect, useState } from "react";
import NavLeft from "../components/NavLeft";
import { HiMenuAlt3 } from "react-icons/hi";
import NavMiddle from "../components/NavMiddle";
import { RxCross1 } from "react-icons/rx";
import NavEnd from "../components/NavEnd";

const MobileNav = ({ className }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 w-full max-w-full bg-secondary py-4 px-4 sm:px-6 ${className ?? ''}`}
    >
      <div className="grid grid-cols-12 w-full max-w-full items-center">
        <NavLeft className="col-span-9"></NavLeft>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="col-span-3 flex justify-end items-center"
        >
          <HiMenuAlt3 className="text-2xl" />
        </button>
      </div>
      <div
        className={`offcanvas fixed inset-0 w-full h-full ${!open ? "bg-transparent pointer-events-none" : "bg-gray-700/70"}`}
      >
        <NavMiddle
          className={`bg-white w-[80%] max-w-[320px] h-full absolute right-0 top-0 p-7 sm:p-10 overflow-y-auto overscroll-contain ${!open ? "translate-x-100" : "translate-x-0"} origin-center duration-300 transform transition-transform`}
        ><NavEnd /></NavMiddle>
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute text-primary text-2xl top-5 right-4 sm:right-8 ${open ? "block" : "hidden"}`}
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;