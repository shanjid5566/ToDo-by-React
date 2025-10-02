import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCircle, BsCheckCircle } from "react-icons/bs";

export default function MyTasks() {
  return (
    <div className=" bg-gray-50 p-4 md:p-8">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - To Do */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-red-500 flex items-center gap-2">
              📋 To-Do
            </h2>
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 text-sm">
              <AiOutlinePlus /> Add Task
            </button>
          </div>
          <p className="text-sm text-gray-500">20 June - Today</p>

          {/* Tasks */}
          <div className="flex flex-col gap-4">
            {/* Card */}
            <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start">
              <div className="text-red-500 mt-1">
                <BsCircle />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">
                  Attend Nischal’s Birthday Party
                </h3>
                <p className="text-sm text-gray-600">
                  Buy gifts on the way and pick up cake from the bakery. (6 PM |
                  Fresh Elements)
                </p>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className="text-blue-600">Priority: Moderate</span>
                  <span className="text-red-500">Status: Not Started</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Created on: 20/06/2023
                </p>
              </div>
              <FiMoreHorizontal className="text-gray-500" />
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start">
              <div className="text-blue-500 mt-1">
                <BsCircle />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">
                  Landing Page Design for TravelDays
                </h3>
                <p className="text-sm text-gray-600">
                  Get the work done by EOD and discuss with client before
                  leaving. (4 PM | Meeting Room)
                </p>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className="text-blue-600">Priority: Moderate</span>
                  <span className="text-blue-500">Status: In Progress</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Created on: 20/06/2023
                </p>
              </div>
              <FiMoreHorizontal className="text-gray-500" />
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start">
              <div className="text-blue-500 mt-1">
                <BsCircle />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Presentation on Final Product</h3>
                <p className="text-sm text-gray-600">
                  Make sure everything is functioning and all the necessities
                  are properly met. Prepare the team and get the documents
                  ready...
                </p>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className="text-blue-600">Priority: Moderate</span>
                  <span className="text-blue-500">Status: In Progress</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Created on: 19/06/2023
                </p>
              </div>
              <FiMoreHorizontal className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {/* Task Status */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Task Status</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="w-16 h-16 mx-auto border-4 border-green-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg">84%</span>
                </div>
                <p className="text-sm text-green-600 mt-2">Completed</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto border-4 border-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg">46%</span>
                </div>
                <p className="text-sm text-blue-600 mt-2">In Progress</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto border-4 border-red-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg">13%</span>
                </div>
                <p className="text-sm text-red-600 mt-2">Not Started</p>
              </div>
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Completed Task</h3>
            <div className="flex flex-col gap-4">
              {/* Card */}
              <div className="bg-gray-50 rounded-lg p-4 flex gap-4 items-start">
                <div className="text-green-500 mt-1">
                  <BsCheckCircle />
                </div>
                <div>
                  <h4 className="font-semibold">Walk the dog</h4>
                  <p className="text-sm text-gray-600">
                    Take the dog to the park and bring treats as well.
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Status: Completed
                  </p>
                  <p className="text-xs text-gray-400">Completed 2 days ago.</p>
                </div>
              </div>

              {/* Card */}
              <div className="bg-gray-50 rounded-lg p-4 flex gap-4 items-start">
                <div className="text-green-500 mt-1">
                  <BsCheckCircle />
                </div>
                <div>
                  <h4 className="font-semibold">Conduct meeting</h4>
                  <p className="text-sm text-gray-600">
                    Meet with the client and finalize requirements.
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Status: Completed
                  </p>
                  <p className="text-xs text-gray-400">Completed 2 days ago.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
