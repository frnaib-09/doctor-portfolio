import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div>
        <div className="grid grid-cols-12 gap-10 lg:gap-24 py-20 lg:py-30 px-10 lg:px-20 items-center">
            <div className="lg:col-span-4 col-span-12 flex justify-center items-center">
                <img src="/images/doc.jpg" alt="" className='rounded-tl-[30px] lg:rounded-tl-[100px] rounded-br-[30px] lg:rounded-br-[100px] w-full max-w-[80%] lg:max-w-none h-auto' />
            </div>
            <div className="col-span-12 lg:col-span-8">
                <h6 className='bg-fourth py-1.5 px-4 rounded-[100px] inline font-primary font-semibold text-xs uppercase text-primary'>About Me</h6>
                <h1 className='mt-8 font-secondary font-normal text-4xl leading-[130%] text-primary'>Nurturing Heart Health Through Evidence-Based Expertise</h1>
                <p className='font-primary font-normal text-base leading-[170%] text-third mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quas esse quis numquam obcaecati adipisci, magni consequatur, necessitatibus illum libero consequuntur earum aut unde laudantium dicta incidunt ad nemo voluptatem?</p>
                <p className='font-primary font-normal text-base leading-[170%] text-third mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iure sequi tenetur, accusamus itaque quod ipsa autem reiciendis. Possimus repellendus quisquam mollitia eaque aspernatur eveniet quia recusandae nesciunt fuga ab.</p>
                <a className='secondary_btn gap-3.5 inline-flex' href="#">Learn More <MdKeyboardArrowRight className='text-lg' /></a>
            </div>
        </div>
    </div>
  )
}

export default About