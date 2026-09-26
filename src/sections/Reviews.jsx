import React from 'react'
import Review from '../components/Review';

const Reviews = () => {
  return (
    <div className="py-15 lg:py-30 px-10 lg:px-20 bg-secondary">
      <div className="head text-center mb-14">
        <h6 className="head_title mb-4">Patient Stories</h6>
        <h1 className="head_exp mt-4">What Patients Say About Dr. Gomez</h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Review
          cmt={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
          }
          author={"John Doe"}
          type={"Hypertensive Heart Disease Patient"}
        />
        <Review
          cmt={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
          }
          author={"John Doe"}
          type={"Hypertensive Heart Disease Patient"}
        />
        <Review
          cmt={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non velit sint optio repellat mollitia nemo deleniti a quasi. Impedit quod fuga qui nam hic a voluptate ratione. Harum, facere."
          }
          author={"John Doe"}
          type={"Hypertensive Heart Disease Patient"}
        />
      </div>
    </div>
  );
}

export default Reviews