import React from "react";
import arrowImg from "../../assets/icons8-right-arrow-24.png";

const Banner = () => {
  return (
    <div className="bg-green-700">
      <div className="flex justify-between lg:gap-10  ">
        <div className="">
          <h3 className="lg:text-8xl text-2xl text-white lg:py-20 text-center font-semibold  w-[900px]">
            Happiness blooms from within
          </h3>
          <p className="text-lg text-white mx-auto  w-[700px]">
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>
          <div className="lg:m-10 py-5 mx-5 gap-5 ">
            <button className="bg-white rounded-xl px-2 py-2 text-xl text-green-900 font-semibold">
              Shop Now
            </button>
            <button className="flex items-center gap-2 text-xl  font-semibold text-white">
              Explore More Plants <img src={arrowImg} alt="" />{" "}
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Banner;
