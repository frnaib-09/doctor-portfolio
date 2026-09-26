import React from 'react'
import { FaRegStar } from "react-icons/fa";

const Review = ({cmt, author, type}) => {
  return (
    <div className="col-span-12 lg:col-span-4 p-4 lg:p-8 border border-[#e5e1d8] rounded-2xl">
      <div className="stars flex items-center gap-1 mb-6">
        <FaRegStar className="text-lg text-[#D4AF37]" />
        <FaRegStar className="text-lg text-[#D4AF37]" />
        <FaRegStar className="text-lg text-[#D4AF37]" />
        <FaRegStar className="text-lg text-[#D4AF37]" />
        <FaRegStar className="text-lg text-[#D4AF37]" />
      </div>
      <p className="font-primary font-normal text-base leading-[160%] text-[#1c2434] mb-6">
        {cmt}
      </p>
      <h4 className="font-secondary font-semibold text-base text-primary mb-1">
        {author}
      </h4>
      <span className="font-primary font-normal text-xs text-third">
        {type}
      </span>
    </div>
  );
}

export default Review