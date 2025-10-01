import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component : home
  },
  {
    path: "/Dashboard",
    Component: Main,
  },
]);

export default router;
