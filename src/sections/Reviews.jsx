import React from 'react'
import Review from '../components/Review';
import Head from '../components/Head'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Reviews = () => {
  return (
    <div data-aos="fade-up" className="section-y section-x bg-secondary">
      <Head
        className="text-center mb-10 sm:mb-14"
        headtitle={"Patient Stories"}
        headexp={"What Patients Say About Dr. Gomez"}
      />
      <div className="gap-4 sm:gap-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Review
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              cmt={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
              }
              author={"John Doe"}
              type={"Hypertensive Heart Disease Patient"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews