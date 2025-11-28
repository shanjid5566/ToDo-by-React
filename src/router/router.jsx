import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import DashBoardMain from "../components/DashBoardMain";
import MyTasks from "../components/MyTasks";
import MyProfile from "../components/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DashBoardMain /> },
      { path: "mytask", element: <MyTasks /> },
      { path: "myProfile", element: <MyProfile /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
