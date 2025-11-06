import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
