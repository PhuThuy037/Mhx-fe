import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  // HomeLayout,
  // Landing,
  // Register,
  // Login,
  DashboardLayout,
  Events,
  // Error,
  // AddJob,
  // Stats,
  // AllJobs,
  // Profile,
  // Admin,
  // EditJob,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "all",
        element: <Events />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
