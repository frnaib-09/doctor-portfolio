import React from 'react'
import Navbar from "../sections/Navbar";
import MobileNav from "../sections/MobileNav";
import Heading from "../components/Heading";
import Footer from "../sections/Footer";
import { FaStar } from "react-icons/fa";
import Review from '../components/Review';

const Testimonials = () => {
  const ratings = [
    {label: "5 star", percentage: 92 },
    {label: "4 star", percentage: 6 },
    {label: "3 star", percentage: 2 },
    {label: "2 star", percentage: 0 },
    {label: "1 star", percentage: 0 },

  ]
  return (
    <div>
      <Navbar className="hidden lg:flex" />
      <MobileNav className="flex lg:hidden" />
      <Heading
        className="mt-25 py-12 px-20 font-secondary font-bold text-[42px]"
        headline={"Patient Testimonials"}
      />
      <div className="grid grid-cols-12 items-start gap-16 py-15 lg:py-30 px-10 lg:px-20">
        <div className="col-span-12 lg:col-span-4">
          <div className="card_1">
            <span>Overall Rating</span>
            <h2>
              4.9 <small>/ 5.0</small>
            </h2>
            <div className="flex items-center gap-2 mt-2 mb-7">
              <div className="stars flex items-center gap-1">
                <FaStar className="text-base text-[#d4af37]" />
                <FaStar className="text-base text-[#d4af37]" />
                <FaStar className="text-base text-[#d4af37]" />
                <FaStar className="text-base text-[#d4af37]" />
                <FaStar className="text-base text-[#d4af37]" />
              </div>
              <p>Based on 200+ reviews</p>
            </div>
            <hr className="border-[#e5e1d8]" />
            <div className="ratingBreakdown mt-7">
              {ratings.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3"
                >
                  <p className="mb-3">{item.label}</p>
                  <div className="barline flex-1 h-2 bg-fourth rounded-sm w-45 overflow-hidden">
                    <div
                      className="progress h-full bg-primary"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="mb-3">{item.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card_2 p-4 lg:p-8 rounded-3xl bg-primary mt-10">
            <h3 className="font-secondary font-bold text-2xl text-secondary mb-3">
              Share Your Experience
            </h3>
            <p className="font-normal text-sm leading-[160%] text-secondary opacity-[0.6]">
              Your feedback helps us continue to provide the highest standard of
              cardiological treatment and patient-centric care.
            </p>
            <a
              className="py-3.5 bg-secondary block mt-6 rounded-[30px] text-center text-primary font-semibold text-sm border border-secondary hover:bg-transparent hover:text-secondary duration-150 ease-in-out"
              href="#"
            >
              Leave a Review
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-12 bg-fifth rounded-3xl p-5 lg:p-10 justify-center items-center gap-10">
            <div className="col-span-12 lg:col-span-4">
              <img
                className="max-w-full h-auto rounded-full"
                src="/images/patient.jpg"
                alt=""
              />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <span className="rounded-[100px] py-1 px-3 bg-fourth font-semibold text-xs uppercase text-primary">
                Featured Story
              </span>
              <h3 className="mt-2 font-secondary font-normal text-2xl leading-[150%] text-primary">
                "Dr. Gomez completely changed how I view my diagnosis. She took
                the time to explain my echocardiogram, step-by-step.
                Unparalleled bedside manner."
              </h3>
              <h5 className="mt-6 font-secondary font-bold text-lg text-primary">
                Peggy Carter
              </h5>
              <p className="mt-1 font-normal text-sm text-third">
                Hypertensive Heart Disease Patient
              </p>
            </div>
          </div>
          <h1 className="mt-16 mb-20 font-secondary font-bold text-[32px] text-primary">
            Clinical Patient Stories
          </h1>
          <div className="grid grid-cols-12 gap-6 py">
            <Review
              className={`col-span-12 lg:col-span-6`}
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
            <Review
              className={`col-span-12 lg:col-span-6`}
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
            <Review
              className={`col-span-12 lg:col-span-6`}
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
            <Review
              className={`col-span-12 lg:col-span-6`}
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
            <Review
              className={`col-span-12 lg:col-span-6`}
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
            <Review
              className={`col-span-12 lg:col-span-6`}
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Testimonials