import React from 'react'
import Head from '../components/Head';
import CertCard from '../components/CertCard';

const Credentials = () => {
  return (
    <div data-aos="fade-up" className='section-y section-x'>
      <Head
        className="mb-18 text-center"
        headtitle={"credentials"}
        headexp={"Board Certifications & Licenses"}
        pragraph={
          "Demonstrating certified clinical competence across core disciplines of internal medicine and cardiology."
        }
      />
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <CertCard 
          year={"2015"} 
          certificate={"Certificate #364812"} 
          ins={"American Board of Internal Medicine"} 
          course={"Cardiovascular Disease"} 
          />
          <CertCard 
          year={"2015"} 
          certificate={"Certificate #364812"} 
          ins={"American Board of Internal Medicine"} 
          course={"Cardiovascular Disease"} 
          />
          <CertCard 
          year={"2015"} 
          certificate={"Certificate #364812"} 
          ins={"American Board of Internal Medicine"} 
          course={"Cardiovascular Disease"} 
          />
          <CertCard 
          year={"2015"} 
          certificate={"Certificate #364812"} 
          ins={"American Board of Internal Medicine"} 
          course={"Cardiovascular Disease"} 
          />
          <CertCard 
          year={"2015"} 
          certificate={"Certificate #364812"} 
          ins={"American Board of Internal Medicine"} 
          course={"Cardiovascular Disease"} 
          />
      </div>
    </div>
  );
}

export default Credentials