import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import AuthContext from "../services/AuthContext";
import {useNavigate} from "react-router-dom"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut} = useContext(AuthContext);


  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white p-3 rounded md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {<IoMenuOutline />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-4/5 bg-gray-800 text-white p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:w-1/5 z-20
        `}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="mytask"
              className={({ isActive }) =>
                isActive ? "font-bold text-teal-400" : "hover:text-teal-300"
              }
              onClick={() => setIsOpen(false)} // close sidebar on mobile
            >
              My Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="myProfile"
              className={({ isActive }) =>
                isActive ? "font-bold text-teal-400" : "hover:text-teal-300"
              }
              onClick={() => setIsOpen(false)} // close sidebar on mobile
            >
              My Profile
            </NavLink>
          </li>
        </ul>
        
      </div>
    </>
  );
}
