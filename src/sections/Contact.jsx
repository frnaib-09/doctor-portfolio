import React from 'react'
import Contcard from '../components/Contcard';
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-30 px-20 bg-fifth">
      <div className="grid grid-cols-12 justify-between">
        <div className="col-span-6 left">
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
          <Contcard icon={<MdOutlineEmail />} adTag={"Email"} detail={"contact@drgomezcardiology.com"} />
        </div>
      </div>
    </div>
  );
}

export default Contact