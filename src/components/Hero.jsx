import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../services/AuthContext";

const Hero = () => {
  const { users: user } = useContext(AuthContext);

  return (
    <div className="bg-gray-50 dark:bg-dark w-full dark:text-light-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 pt-12 pb-24 md:py-22 lg:py-32 xl:py-40 ">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold  mb-3">
          "Organize Your Day with Ease"
        </h1>
        <p className="text-center md:text-xl lg:text-2xl xl:text-3xl">
          "Manage tasks, stay productive, and never miss a deadline."
        </p>
        <div className="flex justify-center items-center gap-3 md:gap-8 mt-4">
          {user ? (
            <>
              <Link to={"/dashboard/mytask"}>
                <button className="bg-button dark:bg-light-white dark:text-black  px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold hover:bg-btn-hover transition duration-150 ease-in-out cursor-pointer">
                  DashBoard
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <button className="bg-button dark:bg-light-white dark:text-black  px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold hover:bg-btn-hover transition duration-150 ease-in-out cursor-pointer">
                  Register
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="bg-button dark:bg-light-white dark:text-black   px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold hover:bg-btn-hover transition duration-150 ease-in-out cursor-pointer">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
