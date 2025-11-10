import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../assets/icons8-user-50.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/plants">Plants</NavLink>
              <NavLink to="/profile">My Profile</NavLink>
            </ul>
          </div>
          <a className="text-xl text-green-600 font-semibold lg:text-3xl">
            Green Sprout
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-4 px-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/plants">Plants</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
          </ul>
        </div>

        <div className="navbar-end gap-5 items-center">
          <div className="font-semibold text-blue-600">
            {user && user.email}
          </div>
          <img src={userImg} alt="" />
          {user ? (
            <button className="btn border-2 font-bold border-amber-700 text-amber-800">
              Logout
            </button>
          ) : (
            <Link to={`/auth/login`}>
              <button className="btn border-2 font-bold border-green-700 text-green-800">
                Login
              </button>
            </Link>
          )}

          <Link to={`/auth/register`}>
            <button className="btn text-white  font-bold bg-green-700">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
