import React from 'react'
import Navbar from '../sections/Navbar';
import MobileNav from '../sections/MobileNav';
import Heading from '../components/Heading';
import Footer from '../sections/Footer';
import Contact from '../sections/Contact'

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
        className="mt-25 py-12 px-20 font-secondary font-bold text-[42px]"
        headline={"Location & Contact"}
      />
      <Contact className={`bg-secondary`} />
      <div className="grid grid-cols-12 py-15 lg:py-30 px-10 lg:px-20">
        <div className="col-span-12 lg:col-span-4">
          <div className="officeHours border border-[#e5e1d8] rounded-2xl p-4 lg:p-8">
            <h2 className="font-secondary font-bold text-2xl text-primary">
              Office Hours
            </h2>
            <p className="font-normal text-sm text-third mt-2">
              Scheduled cardiac diagnostic examinations
            </p>
            {openDay.map((item, index) => (
              <div className="full">
                <div
                  key={index}
                  className="flex justify-between items-center mt-6"
                >
                  <h6 className="font-semibold text-sm text-primary">
                    {item.day}
                  </h6>
                  <p
                    className={` text-sm ${item.time === "Closed" ? "text-[#d9534f] font-semibold" : "text-third font-normal"}`}
                  >
                    {item.time}
                  </p>
                </div>
                <hr
                  className={`w-full border-[#e5e1d8] mt-2 ${item.day === "Sunday" ? "hidden" : ""}`}
                />
              </div>
            ))}
            <p className="p-2 lg:p-4 bg-[#fdf7f7] mt-6 border border-[#f5c6cb] rounded-lg font-normal text-sm leading-[150%] text-[#721c24]">
              Established patients have access to our physician call-line 24/7.
              In clinical emergencies, dial 911 immediately.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage