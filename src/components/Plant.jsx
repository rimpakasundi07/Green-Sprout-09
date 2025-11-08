import React from "react";
import { Link } from "react-router";

const Plant = ({ plant }) => {
  console.log(plant);
  const { plantName, category, rating, image } = plant;
  return (
    <div>
      <Link>
        <div className="border rounded-xl space-y-4  lg:py-5 m-5 text-center shadow-2xl">
          <div className="">
            <img className="w-40 h-full mx-auto " src={image} alt="" />
          </div>
          <h2 className="text-xl font-bold ">
            Plant: <span className="text-green-800"> {plantName}</span>
          </h2>
          <p className="text-lg font-semibold">Category: {category} </p>
          <p className="text-lg text-green-600 pb-2 ">Rating: {rating} </p>
        </div>
      </Link>
    </div>
  );
};

export default Plant;
