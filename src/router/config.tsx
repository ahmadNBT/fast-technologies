
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CleanPage from "../pages/clean/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clean",
    element: <CleanPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
