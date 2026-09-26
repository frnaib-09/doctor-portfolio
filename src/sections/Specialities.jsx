import React from 'react'
import Sklillcard from '../components/Sklillcard';
import { TbActivityHeartbeat } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { FiShield } from "react-icons/fi";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { VscSyncCompact } from "react-icons/vsc";
import { SlEnergy } from "react-icons/sl";

const Specialities = () => {
  return (
    <div className="py-15 lg:py-30 px-10 lg:px-20 bg-fifth">
      <h6 className="head_title">clinical specialities</h6>
      <div className="flex justify-between items-end">
        <h1 className="head_exp mt-4">
          Comprehensive Cardiovascular <br /> Specialties
        </h1>
        <a className="primary_btn" href="#">
          View All Services
        </a>
      </div>
      <div className="cards mt-14">
        <div className="grid grid-cols-12 gap-6">
          <Sklillcard
            icon={<TbActivityHeartbeat />}
            title={"Interventional Cardiology"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quibusdam neque inventore, consectetur architecto sunt at non consequatur quas quod blanditiis."
            }
          />
          <Sklillcard
            icon={<CiImageOn />}
            title={"Echocardiography"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quibusdam neque inventore, consectetur architecto sunt at non consequatur quas quod blanditiis."
            }
          />
          <Sklillcard
            icon={<FiShield />}
            title={"Preventive Cardiology"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quibusdam neque inventore, consectetur architecto sunt at non consequatur quas quod blanditiis."
            }
          />
          <Sklillcard
            icon={<LiaHeartbeatSolid />}
            title={"Heart Failure Management"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quibusdam neque inventore, consectetur architecto sunt at non consequatur quas quod blanditiis."
            }
          />
          <Sklillcard
            icon={<VscSyncCompact />}
            title={"Cardiac Rehabilitation"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quibusdam neque inventore, consectetur architecto sunt at non consequatur quas quod blanditiis."
            }
          />
          <Sklillcard icon={<SlEnergy />} title={"Electrophysiology"} desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quibusdam neque inventore, consectetur architecto sunt at non consequatur quas quod blanditiis."} />
        </div>
      </div>
    </div>
  );
}

export default Specialities