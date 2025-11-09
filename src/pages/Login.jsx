import React, { useState } from "react";
import { Link } from "react-router";
import googleImg from "../assets/icons8-google-48.png";

const Login = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        {/* --- Title for Login --- */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          🔑 Sign In to Your Account
        </h2>

        {/* --- Social Login Option (Google) --- */}
        <button className="w-full flex justify-center items-center gap-3 py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-6">
          {/* Using a placeholder for the Google icon */}
          <img className="w-8" src={googleImg} alt="" />
          Continue with Google
        </button>

        <div className="flex items-center justify-center my-4">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* --- Main Login Form --- */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            {/* Forgot Password Link */}
            <div className="text-sm">
              <a
                href="/forgot-password" // Link for Forget Password page
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }`}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>

        {/* --- Signup Link --- */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?
            <Link
              to={`/auth/register`}
              // Link for Signup page
              className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
