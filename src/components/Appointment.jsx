import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Appointment = ({className}) => {
  return (
    <div>
      <form
        action=""
        className={`w-full max-w-full border border-[#e5e1d8] rounded-3xl p-5 sm:p-8 lg:p-10 ${className}`}
      >
        <h1 className="font-secondary font-bold text-2xl sm:text-[32px] text-primary">
          Requst a Consultation
        </h1>
        <p className="font-normal text-base text-third mt-2">
          Submit the encrypted security form below and our triage coordinator
          will reach out.
        </p>
        <div className="namebox mt-6 sm:mt-8">
          <label htmlFor="name" className="labelclass">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. John Doe"
            className="inputclass"
          />
        </div>
        <div className="contbox mt-5">
          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="email" className="labelclass">
                email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="arthur@example.com"
                className="inputclass"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="phone" className="labelclass">
                phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="(617) 555-0100"
                className="inputclass"
              />
            </div>
          </div>
          <div className="datebox mt-5">
            <label htmlFor="date" className="labelclass">
              preferred appointment date
            </label>
            <input type="date" name="date" id="date" className="inputclass" />
          </div>
          <div className="msgbox mt-5">
            <label htmlFor="msg" className="labelclass">
              Brief Medical Message / Symptoms
            </label>
            <textarea
              name="msg"
              id="msg"
              className="inputclass resize-none"
              rows={5}
            ></textarea>
          </div>
          <button className="primary_btn mt-8">
            Submit Secure Request <FaArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appointment