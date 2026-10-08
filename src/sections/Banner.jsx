import React from "react";
import WebThreads from "../components/WebThreads";
import { FaArrowRight } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full max-w-full min-h-screen overflow-hidden bg-fifth">
      <div className="h-full w-full max-w-full pt-25 pb-10 lg:pb-0">
        <div className="absolute inset-0 z-0 w-full h-full">
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
        <div className="banner relative z-10 w-full max-w-full h-full flex items-center justify-center pointer-events-none">
          <div className="section-x grid grid-cols-12 items-center justify-between w-full max-w-full mx-auto min-h-[calc(100svh-6.25rem)] lg:min-h-[calc(100svh-6.25rem)]">
            <div
              data-aos="fade-up-right"
              className="col-span-12 lg:col-span-6 order-2 lg:order-1"
            >
              <h6 className="font-primary font-semibold text-xs sm:text-sm uppercase text-primary mb-4 lg:mb-9 bg-fourth py-1.5 px-4 rounded-[100px] inline-flex max-w-full">
                Expert Cardiovascular Care
              </h6>
              <h1 className="font-secondary font-normal text-[28px] sm:text-4xl lg:text-6xl leading-[115%] mb-4 text-balance">
                Compassionate Cardiology, Exceptional Care
              </h1>
              <p className="font-primary font-normal text-base leading-[160%] text-third mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit.Maiores, minus ad incidunt alias quaerat rerum a nulla
                earum libero voluptatem aliquam odit, eius, nobis similique
                architecto deleniti! Eum, magni amet.
              </p>
              <div className="btns flex flex-col lg:flex-row gap-4 items-center">
                <Link className="primary_btn pointer-events-auto" to="/contact">
                  Schedule a Consultation <FaArrowRight />
                </Link>
                <a
                  className="secondary_btn pointer-events-auto self-start"
                  href="#"
                >
                  <LuPhone />
                  (555) 234-5678
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="col-span-12 lg:col-span-6 mb-8 lg:mb-0 flex items-center justify-center order-1 lg:order-2"
            >
              <img
                src="/images/dr.avif"
                alt=""
                className="w-[70%] sm:w-[60%] lg:w-[75%] max-w-full h-auto rounded-tl-[30px] lg:rounded-tl-[100px] rounded-br-[30px] lg:rounded-br-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;