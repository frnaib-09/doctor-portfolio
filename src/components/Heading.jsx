import React from 'react'

const Heading = ({headline, className}) => {
  return (
    <div data-aos="fade-down" className="bg-fifth border-b border-[#e5e1d8]">
      <h1 data-aos="fade-right" className={`${className}`}>
        {headline}
      </h1>
    </div>
  );
}

export default Heading