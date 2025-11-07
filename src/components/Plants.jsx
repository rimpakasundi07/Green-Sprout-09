import React, { use } from "react";
import { NavLink } from "react-router";
import Plant from "./Plant";
const plantPromise = fetch("/plants.json").then((res) => res.json());

const Plants = () => {
  const plants = use(plantPromise);
  console.log(plantPromise);
  return (
    <div className="w-11/12 mx-auto py-5  ">
      <p className="lg:text-2xl text-lg py-10 font-bold">
        ALL plants({plants.length}){" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {plants.map((plant) => (
          <Plant key={plant.plantId} plant={plant}></Plant>
        ))}
      </div>
    </div>
  );
};

export default Plants;
