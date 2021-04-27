import React from "react";

import { FaHome, FaSearch, FaPlus, FaStar } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";

export default [
  {
    icon: <FaHome />,
    name: "home",
    link: "/home",
  },
  {
    icon: <FaSearch />,
    name: "search",
    link: "/search",
  },
  {
    icon: <FaPlus />,
    name: "watchlist",
    link: "/watchlist",
  },
  {
    icon: <FaStar />,
    name: "originals",
    link: "/originals",
  },
  {
    icon: <RiMovie2Line />,
    name: "movies",
    link: "/movies",
  },
  {
    icon: <BiCameraMovie />,
    name: "series",
    link: "/series",
  },
];
