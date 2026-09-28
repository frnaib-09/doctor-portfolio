import React from 'react'

const Heading = ({headline, className}) => {
  return (
    <div className="bg-fifth border-b border-[#e5e1d8]">
      <h1 className={`${className}`}>{headline}</h1>
    </div>
  );
}

export default Heading