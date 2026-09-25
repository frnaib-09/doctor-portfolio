import React from 'react'
import SummaryCard from '../components/SummaryCard'

const Summary = ({digit, data}) => {
  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-20 py-4 lg:py-12 justify-between items-center border-b border-[#e5e1d8]'>
        <SummaryCard digit="15+" data="years of experience" />
        <SummaryCard digit="10000+" data="patients helped" />
        <SummaryCard digit="5000+" data="successful procedures" />
        <SummaryCard digit="30+" data="publications" />
    </div>
  )
}

export default Summary