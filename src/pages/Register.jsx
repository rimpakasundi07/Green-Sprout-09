import React, { use } from "react";
import googleImg from "../assets/icons8-google-48.png";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photoUrl, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //    console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
        alert(errorMessage);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          👋 Sign Up for an Account
        </h2>

        <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-2 px-4 text-gray-700 hover:bg-gray-50 transition duration-150 mb-4">
          <img className="w-8" src={googleImg} alt="" />
          <span className="font-medium">Sign up with Google</span>
        </button>

        <div className="relative flex items-center justify-center my-6">
          <div className="w-full border-t border-gray-300"></div>
          <span className="absolute bg-white px-3 text-sm text-gray-500">
            OR
          </span>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Full Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL (Optional)
            </label>
            <input
              type="url"
              name="photoUrl"
              id="photoUrl"
              placeholder="https://example.com/photo.jpg"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>

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
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-150"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to={`/auth/login`}
            className="font-medium text-sky-600 hover:text-sky-500 ml-1 cursor-pointer"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
