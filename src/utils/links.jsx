import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "University",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "Student Event List",
    path: "http://localhost:5173/all",
    icon: <MdQueryStats />,
  },

  {
    text: "Community",
    path: "http://localhost:5173/add-event",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "http://localhost:5173/list-com",
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
