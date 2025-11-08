import React from "react";
import { Link } from "react-router";
import arrowImg from "../assets/icons8-right-arrow-24.png";

const Plant = ({ plant }) => {
  console.log(plant);
  const { plantName, category, plantId, rating, image } = plant;
  return (
    <div>
      <div className="border-3 border-dashed border-[#A9D880] rounded-xl space-y-4  lg:py-5 m-5 text-center shadow-2xl">
        <div className="">
          <img className="w-40 h-full mx-auto " src={image} alt="" />
        </div>
        <h2 className="text-xl font-bold ">
          Plant: <span className="text-green-800"> {plantName}</span>
        </h2>
        <p className="text-lg font-semibold">Category: {category} </p>
        <p className="text-lg text-green-600 pb-2 ">Rating: {rating} </p>

        <Link
          to={`/plantDetails/${plantId}`}
          className="max-w-7/12 btn rounded-lg mx-auto flex gap-3 cursor-pointer text-white font-bold bg-green-800"
        >
          View Details <img src={arrowImg} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Plant;
