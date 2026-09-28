import React from 'react'
import Review from '../components/Review';
import Head from '../components/Head'

const Reviews = () => {
  return (
    <div className="py-15 lg:py-30 px-10 lg:px-20 bg-secondary">
      <Head className="text-center mb-14"
        headtitle={"Patient Stories"}
        headexp={"What Patients Say About Dr. Gomez"}
      />
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