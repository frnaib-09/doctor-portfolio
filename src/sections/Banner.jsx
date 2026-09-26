import React from "react";
import WebThreads from "../components/WebThreads";
import { FaArrowRight } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-fifth">
      <div className="mt-25">
        <div className="absolute inset-0 z-0 min-w-full min-h-full">
          <WebThreads
            color1="#6B6258"
            color2="#292524"
            color3="#A08F7D"
            speed={1}
            threadCount={6}
            frequency={7.5}
            spread={0.16}
            taper={1}
            position={0.5}
            fanMode="center"
            glow={0.029}
            falloff={0.66}
            thickness={0.25}
            brightness={-0.15}
            opacity={0.25}
            mirror
            shimmer
            grain
            grainIntensity={0.05}
            mouseInteraction
            mouseStrength={1}
          />
        </div>
        <div className="banner relative z-10 h-full flex items-center justify-center pointer-events-none">
          <div className="grid grid-cols-12 items-center justify-between w-full h-screen mx-auto">
            <div className="col-span-12 lg:col-span-6 px-4 lg:px-20 order-2 lg:order-1">
              <h6 className="font-primary font-semibold text-sm uppercase text-primary ps-4 mb-4 lg:mb-9 bg-fourth py-1.5 px-4 rounded-[100px] inline-flex">
                Expert Cardiovascular Care
              </h6>
              <h1 className="font-secondary font-normal text-3xl lg:text-6xl leading-[115%] mb-4">
                Compassionate Cardiology, Exceptional Care
              </h1>
              <p className="font-primary font-normal text-base leading-[160%] text-third mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit.Maiores, minus ad incidunt alias quaerat rerum a nulla
                earum libero voluptatem aliquam odit, eius, nobis similique
                architecto deleniti! Eum, magni amet.
              </p>
              <div className="btns lg:flex gap-4 items-center">
                <a
                  className="primary_btn pointer-events-auto mb-3 lg:mb-0"
                  href="#"
                >
                  Schedule a Consultation <FaArrowRight />
                </a>
                <a
                  className="secondary_btn"
                  href="#"
                >
                  <LuPhone />
                  (555) 234-5678
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 mb-8 lg:mb-0 flex items-center justify-center order-1 lg:order-2">
              <img
                src="/images/dr.avif"
                alt=""
                className="w-[70%] h-auto rounded-tl-[30px] lg:rounded-tl-[100px] rounded-br-[30px] lg:rounded-br-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
