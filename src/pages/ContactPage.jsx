import React from 'react'
import Navbar from '../sections/Navbar';
import MobileNav from '../sections/MobileNav';
import Heading from '../components/Heading';
import Footer from '../sections/Footer';
import Contact from '../sections/Contact'
import { FaArrowRight } from "react-icons/fa6";

const ContactPage = () => {
  const openDay = [
    { day: "Monday", time: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
    { day: "Thursday", time: "8:00 AM - 5:00 PM" },
    { day: "Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "8:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];
  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Heading
        className="page-head"
        headline={"Location & Contact"}
      />
      <Contact className={`bg-secondary`} />
      <div className="section-y section-x grid grid-cols-12 gap-4 sm:gap-6 lg:gap-16">
        <div className="col-span-12 lg:col-span-4">
          <div className="officeHours w-full max-w-full border border-[#e5e1d8] rounded-2xl p-4 sm:p-6 lg:p-8">
            <h2 className="font-secondary font-bold text-2xl text-primary">
              Office Hours
            </h2>
            <p className="font-normal text-sm text-third mt-2">
              Scheduled cardiac diagnostic examinations
            </p>
            {openDay.map((item, index) => (
              <div className="full" 
                  key={index}>
                <div
                  className="flex flex-wrap justify-between items-center gap-x-3 gap-y-1 mt-6"
                >
                  <h6 className="font-semibold text-sm text-primary">
                    {item.day}
                  </h6>
                  <p
                    className={`shrink-0 text-sm ${item.time === "Closed" ? "text-[#d9534f] font-semibold" : "text-third font-normal"}`}
                  >
                    {item.time}
                  </p>
                </div>
                <hr
                  className={`w-full border-[#e5e1d8] mt-2 ${item.day === "Sunday" ? "hidden" : ""}`}
                />
              </div>
            ))}
            <p className="p-3 sm:p-4 bg-[#fdf7f7] mt-6 border border-[#f5c6cb] rounded-lg font-normal text-sm leading-[150%] text-[#721c24]">
              Established patients have access to our physician call-line 24/7.
              In clinical emergencies, dial 911 immediately.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <form action="" className='w-full max-w-full border border-[#e5e1d8] rounded-3xl p-5 sm:p-8 lg:p-10'>
            <h1 className='font-secondary font-bold text-2xl sm:text-[32px] text-primary'>Requst a Consultation</h1>
            <p className='font-normal text-base text-third mt-2'>Submit the encrypted security form below and our triage coordinator will reach out.</p>
            <div className="namebox mt-6 sm:mt-8">
              <label htmlFor="name" className='labelclass'>Your Name</label>
              <input type="text" name='name' id='name' placeholder='e.g. John Doe' className='inputclass' />
            </div>
            <div className="contbox mt-5">
              <div className="grid grid-cols-12 gap-4 sm:gap-5">
                <div className="col-span-12 lg:col-span-6">
                  <label htmlFor="email" className='labelclass'>email address</label>
                  <input type="email" name='email' id='email' placeholder='arthur@example.com' className='inputclass'  />
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <label htmlFor="phone" className='labelclass'>phone number</label>
                  <input type="tel" name='phone' id='phone' placeholder='(617) 555-0100' className='inputclass' />
                </div>
              </div>
              <div className="datebox mt-5">
                <label htmlFor="date" className='labelclass'>preferred appointment date</label>
                <input type="date" name='date' id='date' className='inputclass' />
              </div>
              <div className="msgbox mt-5">
                <label htmlFor="msg" className='labelclass'>Brief Medical Message / Symptoms</label>
                <textarea name="msg" id="msg" className='inputclass resize-none' rows={5}></textarea>
              </div>
              <button className='primary_btn mt-8'>Submit Secure Request <FaArrowRight /></button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage