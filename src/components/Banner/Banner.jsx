import React from "react";
import arrowImg from "../../assets/icons8-right-arrow-24.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img 2.png";
import img3 from "../../assets/img3.png";
import shippingImg from "../../assets/shipping.png";
import paymentImg from "../../assets/payment.png";
import serviceImg from "../../assets/service.png";
const Banner = () => {
  return (
    <div className="">
      <div className="bg-green-700">
        {/* part 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 items-center mx-auto lg:gap-10">
          <div className="flex-1">
            {" "}
            <h3 className="lg:text-8xl text-3xl py-5 text-white lg:py-20 text-left font-semibold ">
              Happiness blooms from within
            </h3>
            <p className="text-lg text-white ">
              Our environment, the world in which we live and work, is a mirror
              of our attitudes and expectations.
            </p>
            <div className="lg:m-10 py-5 mx-5 gap-5 flex">
              {" "}
              <button className="bg-white  rounded-xl px-2 py-2 text-xl text-green-900 font-semibold mr-4">
                {" "}
                Shop Now
              </button>
              <button className=" md:flex hidden items-center gap-2 text-xl font-semibold text-white">
                Explore More Plants{" "}
                <img src={arrowImg} alt="" className="ml-2" />{" "}
              </button>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col flex-1 items-center justify-center p-4">
            {" "}
            <div className="flex flex-col space-y-4 mr-4">
              {" "}
              <div className="relative md:block hidden  lg:w-64 lg:h-72 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full  h-full object-cover"
                  src={img1}
                  alt="New Plant"
                />
                <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              </div>
              <div className="relative  lg:w-64 lg:h-72 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full  h-full object-cover"
                  src={img2}
                  alt="Popular Plant"
                />
                <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                  Popular
                </span>
              </div>
            </div>
            <div className="relative md:block hidden lg:w-96 lg:h-[550px] bg-white rounded-lg shadow-lg overflow-hidden mt-4 lg:mt-0">
              {" "}
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
      {/* part 2 */}
      <div className="w-11/12 mx-auto">
        <div className="section-title-container">
          <h2 className="title-text text-2xl text-[#A9D880] lg:text-4xl text-center lg:py-10 py-5  font-bold">
            Our Product
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 lg:py-4 ">
          <div className="border-3 border-dashed hover:border-3 rounded-lg border-[#A9D880] ">
            <img className="p-5 mx-auto" src={shippingImg} alt="" />
            <h3 className="lg:text-2xl text-center text-lg  font-semibold ">
              Free Shipping
            </h3>
            <p className="text-lg text-center py-3 text-gray-700">
              Capped at $319 per order
            </p>
          </div>
          <div className="border-3 border-dashed hover:border-3 rounded-lg border-[#A9D880] ">
            <img className="p-5 mx-auto" src={paymentImg} alt="" />
            <h3 className="lg:text-2xl text-center text-lg  font-semibold ">
              Safe Payment
            </h3>
            <p className="text-lg text-center py-3 text-gray-700">
              With our payment gateway
            </p>
          </div>
          <div className="border-3 border-dashed hover:border-3 rounded-lg border-[#A9D880] ">
            <img className="p-5 mx-auto" src={serviceImg} alt="" />
            <h3 className="lg:text-2xl text-center text-lg font-semibold">
              Best Services
            </h3>
            <p className="text-lg text-center py-3 text-gray-700">
              Friendly & Supper Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
