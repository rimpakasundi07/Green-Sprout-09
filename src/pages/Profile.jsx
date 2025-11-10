import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-start">
        <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            👤 My Profile
          </h2>

          {/* --- User Information Display Section --- */}
          <div className="flex flex-col items-center mb-8">
            {/* User Photo */}
            <div className="relative w-28 h-28 mb-4 rounded-full border-4 border-indigo-500 overflow-hidden shadow-md">
              <img
                src={user?.photoUrl}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
              {/* Overlay for aesthetic */}
              <div className="absolute inset-0 bg-opacity-10"></div>
            </div>

            {/* Name and Email */}
            <div className="text-center">
              <p className="text-2xl font-semibold text-blue-900">
                Name: {user?.displayName}
              </p>
              <p className="text-xl font-semibold">Email: {user?.email}</p>

              {/* <div className="flex items-center justify-center text-sm text-gray-500 mt-1"></div> */}
            </div>
          </div>

          <hr className="my-6" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
