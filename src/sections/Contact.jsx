import React from 'react'
import Contcard from '../components/Contcard';
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = ({className}) => {
  return (
    <div className={`py-15 lg:py-30 px-10 lg:px-20 bg-fifth ${className}`}>
      <div className="grid grid-cols-12 justify-between">
        <div className="col-span-12 lg:col-span-6 left">
          <h6 className="head_title">Visit Me</h6>
          <h1 className="head_exp mb-4">Heart & Vascular Clinic</h1>
          <p className="font-primary font-normal text-base leading-[160%] text-third mb-10">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            molestias beatae nesciunt ratione aliquid rerum accusantium sit nemo
            autem magnam!
          </p>
          <Contcard
            icon={<GrLocation />}
            adTag={"Address"}
            detail={"720 Medical Plaza, Suite 400, Austin, TX 78701"}
          />
          <Contcard
            icon={<FiPhone />}
            adTag={"Phone"}
            detail={"(555) 234-5678"}
          />
          <Contcard
            icon={<MdOutlineEmail />}
            adTag={"Email"}
            detail={"contact@drgomezcardiology.com"}
          />
        </div>
        <div className="col-span-12 lg:col-span-6 right mx-auto">
          <iframe
          className='w-150 h-112.5 max-w-full max-h-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6469363.433718248!2d-125.24675970611752!3d37.65228693806403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809012a3d1bc8f27%3A0x4fa33e6cc0d5d0bc!2sSan%20Joaquin%20General%20Hospital!5e0!3m2!1sen!2sbd!4v1790532963847!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact