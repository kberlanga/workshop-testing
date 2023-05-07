import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Users } from "./pages/Users";
import Dashboard from "./layouts/dashboard/Dashboard";

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTER = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
]);