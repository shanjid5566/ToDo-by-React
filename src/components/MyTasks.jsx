import React, { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import axios from "axios";

export default function MyTasks() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");
  console.log(status);

  // Fetch tasks from DB
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todos");
        console.log("Tasks from API:", response.data);
        setTasks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  // Add new task
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const priority = form.priority.value;

    const newTask = {
      title,
      description,
      priority,
      createdAt: new Date().toLocaleString(),
      status: "Not Started",
    };

    try {
      const response = await axios.post("http://localhost:4000/todos", newTask);

      // Merge response + local object (in case API doesn't return all fields)
      const taskFromAPI = response.data || {};
      const updatedTask = {
        ...newTask, // ensure all fields exist
        _id: taskFromAPI._id || Date.now(), // unique ID for React key
      };

      // Update state immediately
      setTasks((prev) => [...prev, updatedTask]);
      setIsOpen(false);
      form.reset();
    } catch (err) {
      console.error(err);
    }
  };
  const handleStatus = async (e, taskId) => {
    const newStatus = e.target.value; // radio এর value
    try {
      // Update DB
      await axios.patch(`http://localhost:4000/todos/${taskId}`, {
        status: newStatus,
      });

      // Update local state
      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );

      // Optionally update selected radio state
      setStatus(newStatus);
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };
  return (
    <div className="bg-gray-50 p-4 md:p-8">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - To Do */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-red-500 flex items-center gap-2">
              📋 To-Do
            </h2>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 text-sm"
            >
              <AiOutlinePlus /> Add Task
            </button>
          </div>
          <p className="text-sm text-gray-500">20 June - Today</p>

          {/* Tasks */}
          <div className="flex flex-col gap-4">
            {tasks.map((task) => (
              <div
                key={task._id} // unique key
                className="bg-white rounded-xl shadow p-4 flex gap-4 items-start"
              >
                {console.log(task)}
                <div className="text-red-500 mt-1">
                  <div className="space-x-2 flex items-center">
                    <label>Completed</label>
                    <input
                      type="radio"
                      name={`status-${task._id}`}
                      value="Completed"
                      checked={task.status === "Completed"}
                      onChange={(e) => handleStatus(e, task._id)}
                    />
                  </div>
                  <div className="space-x-2 flex items-center">
                    <label>In Process</label>
                    <input
                      type="radio"
                      name={`status-${task._id}`}
                      value="In process"
                      checked={task.status === "In process"}
                      onChange={(e) => handleStatus(e, task._id)}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{task?.title}</h3>
                  <p className="text-sm text-gray-600">{task?.description}</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="text-blue-600">
                      Priority: {task?.priority ?? "Normal"}
                    </span>
                    <span className="text-red-500">Status: {task?.status}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Created on: {task?.createdAt ?? "Unknown"}
                  </p>
                </div>
                <FiMoreHorizontal className="text-gray-500" />
              </div>
            ))}
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
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Add New Task</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  rows="3"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium">Priority</label>
                <select
                  name="priority"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                >
                  <option value="Important">Important</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Normal">Normal</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Save Task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
