import React from 'react'
import Head from '../components/Head'

const Learning = () => {
  return (
    <div className='py-15 lg:py-30 px-10 lg:px-20 bg-[#faf7f2]'>
        <Head
        className="mb-18 text-center"
        headtitle={"Continuous Learning"}
        headexp={"Recent Conferences & Symposia"}
        pragraph={
          "Active participant and speaker in global cardiovascular assemblies, driving continuous research integration."
        }
      />
      <div className="conferenceCards">
        <div className="plate flex gap-6 items-center bg-secondary border border-[#e5e1d8] rounded-xl p-6">
            <span className='pr-6 font-primary font-semibold text-sm uppercase text-[#768c7f]'>November 2025 &bull; Chicago, IL</span>
            <div className="block pl-6 border-l border-[#e5e1d8]">
                <div className="flex items-center gap-3">
                    <h4 className='font-secondary font-bold text-xl text-primary'>American Heart Association (AHA) Scientific Sessions 2025</h4>
                    <h6 className='rounded-[100px] bg-fourth py-0.5 px-2.5 font-primary font-bold text-xs text-primary'>Invited Speaker</h6>
                </div>
                <p className='font-primary font-normal text-sm text-third'>Pioneering non-invasive echocardiography diagnostics in early-stage heart failure.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Learning