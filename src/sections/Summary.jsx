import React from 'react'
import SummaryCard from '../components/SummaryCard'

const Summary = ({digit, data}) => {
  return (
    <div
      data-aos="fade-up"
      className="section-x py-8 sm:py-10 lg:py-12 grid grid-cols-2 sm:grid-cols-4 gap-y-8 justify-items-center lg:flex lg:justify-between lg:items-center border-b border-[#e5e1d8]"
    >
      <SummaryCard digit="15+" data="years of experience" />
      <SummaryCard digit="10000+" data="patients helped" />
      <SummaryCard digit="5000+" data="successful procedures" />
      <SummaryCard digit="30+" data="publications" />
    </div>
  );
}

export default Summary