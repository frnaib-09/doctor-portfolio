import React from 'react'
import Head from '../components/Head'
import ConfPlate from '../components/ConfPlate'

const Learning = () => {
  return (
    <div className="py-15 lg:py-30 px-10 lg:px-20 bg-fifth">
      <Head
        className="mb-18 text-center"
        headtitle={"Continuous Learning"}
        headexp={"Recent Conferences & Symposia"}
        pragraph={
          "Active participant and speaker in global cardiovascular assemblies, driving continuous research integration."
        }
      />
      <div className="conferenceCards py-3 px-2">
        <ConfPlate
          graduation={"November 2025  \u2022  Chicago, IL"}
          inst={"American Heart Association (AHA) Scientific Sessions 2025"}
          gtype={"Invited Speaker"}
          pra={
            "Pioneering non-invasive echocardiography diagnostics in early-stage heart failure."
          }
        />
        <ConfPlate
          graduation={"April 2025  \u2022  Orlando, FL"}
          inst={
            "American College of Cardiology (ACC) Annual Scientific Session 2025"
          }
          gtype={"Panelist"}
          pra={
            "Contemporary catheter-based interventional techniques and longitudinal patient outcomes."
          }
        />
        <ConfPlate
          graduation={"August 2024  \u2022  London, UK"}
          inst={"European Society of Cardiology (ESC) Congress 2024"}
          gtype={"Researcher & Presenter"}
          pra={
            "Multi-center clinical evaluations of aggressive genetic screening in preventive cardiology."
          }
        />
      </div>
    </div>
  );
}

export default Learning