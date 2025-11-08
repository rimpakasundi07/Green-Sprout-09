import { createBrowserRouter } from "react-router";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import Root from "../pages/Root/Root";
//import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/profile",
        element: <h2 className="text-2xl">Profile</h2>,
      },
      {
        path: "/plants",
        element: <h2 className="text-2xl">Plant Layout</h2>,
      },
      {
        path: "/plantDetails/:id",
        loader: () => fetch("/plants.json"),
        element: <PlantDetails></PlantDetails>,
      },
      {
        path: "/*",
        element: <h2 className="text-2xl">Error - 404 </h2>,
      },
    ],
  },
]);

export default router;
