import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Events,
  EventsCommunity,
  Error,
  AddEvent,
  // Stats,
  // AllJobs,
  // Profile,
  // Admin,
  // EditJob,
} from "./pages";
import { action as loginAction } from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        // action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
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
