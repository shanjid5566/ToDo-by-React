import React, { useState } from "react";

const AddCustomerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div className="bg-white w-full max-w-3xl mx-4 md:mx-6 rounded-lg shadow-lg max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            &larr;
          </button>
          <h2 className="text-lg md:text-xl font-semibold text-center flex-1">
            Add Customer
          </h2>
          <div className="w-6"></div> {/* placeholder for spacing */}
        </div>

        {/* Scrollable Form */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <h3 className="text-base md:text-lg font-semibold">Customer Info</h3>

          <div className="space-y-3">
            <div>
              <label className="block text-sm md:text-base font-medium">
                First name*
              </label>
              <input
                type="text"
                placeholder="John"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Middle name
              </label>
              <input
                type="text"
                placeholder="D"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Last name*
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Also Known As
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Phone*
              </label>
              <input
                type="tel"
                placeholder="+91-9876543210"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Geo Location*
              </label>
              <input
                type="text"
                placeholder="Select on map"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                District
              </label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Select district</option>
              </select>
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Mandal
              </label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Select Mandal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Village
              </label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Select Village</option>
              </select>
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium">
                Registered By*
              </label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Field Agent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fixed Button */}
        <div className="p-4 border-t flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Add Customer
      </button>

      <AddCustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
