import React, { Suspense } from "react";
import { Outlet } from "react-router";

import Banner from "../components/Banner/Banner";

import Plants from "../components/Plants";

const HomeLayout = () => {
  return (
    <div>
      <header>
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
