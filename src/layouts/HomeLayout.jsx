import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

import Plants from "../components/Plants";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
        <Banner></Banner>

        <Plants></Plants>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
