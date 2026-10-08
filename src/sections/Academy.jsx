import React from 'react'
import Head from '../components/Head'
import AcademicCard from '../components/AcademicCard';

const Academy = () => {
  return (
    <div
      data-aos="fade-up"
      className="section-y section-x bg-fifth text-center"
    >
      <Head
        className="mb-18"
        headtitle={"Academic Path"}
        headexp={"Education & Clinical Training"}
        pragraph={
          "A rigorous foundation in cardiovascular science, built at the world's most prestigious medical institutions."
        }
      />
      <div className="expCard">
        <AcademicCard
          year="2012 - 2015"
          degree="Fellowship in Cardiology"
          inst="Cleveland Clinic"
          detailed="Intensive training in diagnostic and therapeutic cardiology, specializing in advanced echocardiography techniques and diagnostic cardiac catheterization."
        />
        <AcademicCard
          year="2012 - 2015"
          degree="Fellowship in Cardiology"
          inst="Cleveland Clinic"
          detailed="Intensive training in diagnostic and therapeutic cardiology, specializing in advanced echocardiography techniques and diagnostic cardiac catheterization."
        />
        <AcademicCard
          year="2005 - 2009"
          degree="Medical School (MD)"
          inst="Johns Hopkins University"
          detailed="Earned medical degree with high honors, participating in breakthrough clinical cardiology research and community health outreach programs."
        />
      </div>
    </div>
  );
}

export default Academy