import React from "react";

import { HomeClass } from "../pages/Home/HomeClass";
import { HomeFunction } from "../pages/Home/HomeFunction";
import { Settings } from "../pages/Settings";

export const routes = [
  {
    id: 0,
    path: "",
    name: "Functional home",
    element: <HomeFunction />,
  },
  { id: 1, path: "Class", name: "Class home", element: <HomeClass /> },
  {
    id: 2,
    path: "Settings",
    name: "Settings",
    element: (
      // eslint-disable-next-line no-undef
      <Settings />
    ),
  },
];
