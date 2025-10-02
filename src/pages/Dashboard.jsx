import React from "react";

import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className='flex '>
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100">
          <Outlet /> {/* Nested routes will render here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
