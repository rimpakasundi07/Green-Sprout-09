import React from "react";
//import arrowImg from "../assets/icons8-right-arrow-24.png";
import { Link, useLoaderData, useParams } from "react-router";

const PlantDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const plantId = parseInt(id);
  const singlePlant = data.find((plant) => plant.plantId === plantId);
  console.log(singlePlant);

  const renderRating = (r) => {
    const fullStar = "⭐";
    const emptyStar = "☆";
    const maxRating = 5;
    const filledStars = Math.round(r);
    const stars = Array(maxRating)
      .fill(fullStar, 0, filledStars)
      .fill(emptyStar, filledStars, maxRating)
      .join("");
    return <span className="text-yellow-500">{stars}</span>;
  };

  const {
    plantName,
    category,
    rating,
    image,
    price,
    availableStock,
    description,
    careLevel,
    providerName,
  } = singlePlant;
  return (
    <div className="">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Back Link */}
        <Link
          to="/plants"
          className="text-green-600 hover:text-green-800 font-medium flex items-center mb-6"
        >
          <span className="mr-2">←</span> Back to Plants List
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plant Details Section (2/3 width on large screens) */}
          <div className="lg:col-span-2 bg-white shadow-xl rounded-lg overflow-hidden p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Large Image */}
              <div className="md:w-1/2 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                <img
                  src={image}
                  alt={plantName}
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>

              {/* Info Box */}
              <div className="md:w-1/2">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                  {plantName}
                </h1>

                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    ${price.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    {renderRating(rating)}
                    <span className="text-gray-500 ml-2 text-sm">
                      ({rating.toFixed(1)})
                    </span>
                  </div>
                </div>

                <p
                  className={`text-lg font-semibold ${
                    availableStock > 0 ? "text-blue-400" : "text-red-500"
                  } mb-4`}
                >
                  Stock:{" "}
                  {availableStock > 0
                    ? `${availableStock} available`
                    : "Out of Stock"}
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-2 mt-4">
                  Description
                </h2>

                <div className="space-y-3 py-2">
                  <p className="text-gray-600 leading-relaxed border-t pt-2">
                    {description}
                  </p>
                  <p className="font-semibold ">
                    Category:
                    <span className="text-gray-700  font-normal">
                      {" "}
                      {category}
                    </span>{" "}
                  </p>
                  <p className="font-semibold ">
                    Care Level:
                    <span className="text-gray-700 font-normal">
                      {" "}
                      {careLevel}
                    </span>{" "}
                  </p>
                  <p className="font-semibold ">
                    Provide By:{" "}
                    <span className="text-gray-700 font-normal">
                      {" "}
                      {providerName}{" "}
                    </span>{" "}
                  </p>
                </div>

                <button
                  className={`mt-6 w-full py-3 rounded-lg text-white font-bold transition duration-300 ${
                    availableStock > 0
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={availableStock <= 0}
                >
                  {availableStock > 0 ? "Buy Now" : "Currently Unavailable"}
                </button>
              </div>
            </div>
          </div>

          {/* Consultation Form Section (1/3 width on large screens) */}
          <div className="lg:col-span-1">
            <form className="bg-white p-6 shadow-xl rounded-lg border border-gray-100 sticky top-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                🪴 Book Consultation
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Need expert advice on caring for your **{plantName}**? Book a
                session now!
              </p>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Full Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
