import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Head from '../components/Head'

const AboutSection = ({ headtitle="About Me", headexp="Nurturing Heart Health Through Evidence-Based Expertise", showExtra=false, showLess = true }) => {
  return (
    <div className="w-full max-w-full">
      <div className="section-y section-x grid grid-cols-12 gap-4 sm:gap-6 lg:gap-12 xl:gap-24 items-center">
        <div className="lg:col-span-4 col-span-12 flex flex-col justify-center items-center">
          <img
            src="/images/doc.jpg"
            alt=""
            className="rounded-tl-[30px] lg:rounded-tl-[100px] rounded-br-[30px] lg:rounded-br-[100px] w-full max-w-[70%] sm:max-w-[55%] lg:max-w-none h-auto"
          />
          {showExtra && (
            <div className="shortInt max-w-sm lg:max-w-none">
              <h3>Dr. Elena Gomez, MD, FACC</h3>
              <span>Board-Certified Cardiologist</span>
              <hr className="border-[#e5e1d8] mb-2" />
              <p>
                Specializing in Interventional Cardiology, Advanced Cardiac
                Imaging, and Comprehensive Heart Prevention.
              </p>
            </div>
          )}
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Head headtitle={headtitle} headexp={headexp} />
          <p className="font-primary font-normal text-base leading-[170%] text-third mb-5 mt-6 sm:mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            quas esse quis numquam obcaecati adipisci, magni consequatur,
            necessitatibus illum libero consequuntur earum aut unde laudantium
            dicta incidunt ad nemo voluptatem?
          </p>
          <p className="font-primary font-normal text-base leading-[170%] text-third mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iure
            sequi tenetur, accusamus itaque quod ipsa autem reiciendis. Possimus
            repellendus quisquam mollitia eaque aspernatur eveniet quia
            recusandae nesciunt fuga ab.
          </p>
          {showLess && (
            <a className="secondary_btn gap-3.5 inline-flex" href="#">
              Learn More <MdKeyboardArrowRight className="text-lg" />
            </a>
          )}
          
          {showExtra && (
            <div>
              <p className="font-secondary font-normal italic text-lg sm:text-xl leading-[150%] text-primary mt-8 mb-3">
                "Every heart tells a story. My role is to listen, understand,
                and guide each patient toward their best possible health."
              </p>
              <span className="font-primary font-semibold text-xs sm:text-sm uppercase text-third">
                — Dr. Elena Gomez
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutSection