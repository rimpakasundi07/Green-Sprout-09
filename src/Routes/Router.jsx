import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
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
    path: "/*",
    element: <h2 className="text-2xl">Error - 404 </h2>,
  },
]);

export default router;
