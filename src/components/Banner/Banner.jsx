import React from "react";
import arrowImg from "../../assets/icons8-right-arrow-24.png";
import img1 from "../../assets/img1.png"; // Assuming this is your "New" plant
import img2 from "../../assets/img 2.png"; // Assuming this is your "Popular" plant
import img3 from "../../assets/img3.png"; // Assuming this is your "Featured" Anthurium

const Banner = () => {
  return (
    <div className="bg-green-700">
      <div className="flex justify-between lg:gap-10">
        <div className="flex-1">
          {" "}
          {/* This div contains your text and buttons */}
          <h3 className="lg:text-8xl text-2xl text-white lg:py-20 text-center font-semibold w-[900px]">
            Happiness blooms from within
          </h3>
          <p className="text-lg text-white mx-auto w-[700px]">
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>
          <div className="lg:m-10 py-5 mx-5 gap-5 flex">
            {" "}
            {/* Added flex to align buttons */}
            <button className="bg-white rounded-xl px-2 py-2 text-xl text-green-900 font-semibold mr-4">
              {" "}
              {/* Added margin-right */}
              Shop Now
            </button>
            <button className="flex items-center gap-2 text-xl font-semibold text-white">
              Explore More Plants <img src={arrowImg} alt="" className="ml-2" />{" "}
              {/* Added margin-left for arrow */}
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col flex-1 items-center justify-center p-4">
          {" "}
          {/* This div will hold all three images for the right side */}
          <div className="flex flex-col space-y-4 mr-4">
            {" "}
            {/* Container for the two smaller images, with right margin */}
            <div className="relative w-64 h-72 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={img1}
                alt="New Plant"
              />
              <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                New
              </span>
            </div>
            <div className="relative w-64 h-72 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={img2}
                alt="Popular Plant"
              />
              <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                Popular
              </span>
            </div>
          </div>
          <div className="relative w-96 h-[550px] bg-white rounded-lg shadow-lg overflow-hidden mt-4 lg:mt-0">
            {" "}
            {/* Container for the larger featured image */}
            <img
              className="w-full h-full object-cover"
              src={img3}
              alt="Anthurium Flower"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950 to-transparent p-4 text-white">
              <h4 className="text-3xl font-bold">Anthurium Flower</h4>
              <p className="text-sm">
                The flower of human being. It has meaningful of fact that the
                plant always grow whatever season and weather.
              </p>
              <button className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                READ MORE
              </button>
            </div>
            <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
