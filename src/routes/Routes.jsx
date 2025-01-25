import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import GadgetContainer from "../components/GadgetContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),

        children: [
          {
            path: "/gadgets/:category",
            element: <GadgetContainer />,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/",
            element: <GadgetContainer />,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/gadgets/all",
            element: <GadgetContainer />,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default routes;
