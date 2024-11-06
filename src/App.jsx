import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  // HomeLayout,
  // Landing,
  // Register,
  // Login,
  DashboardLayout,
  Events,
  EventsCommunity,
  // Error,
  AddEvent,
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
      {
        path: "list-com",
        element: <EventsCommunity />,
      },
      {
        path: "add-event",
        element: <AddEvent />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
