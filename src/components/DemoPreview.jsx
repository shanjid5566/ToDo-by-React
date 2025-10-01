import React from "react";

function DemoPreview() {
  return (
    <section className="py-4 lg:py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12  text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          App Demo Preview
        </h2>

        {/* Demo Card */}
        <div className=" dark:bg-black border border-gray-200  rounded-xl shadow-lg p-6 w-sm md:w-lg lg:w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Today’s Tasks
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded">
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  Finish React Landing Page
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Due: Today, 6:00 PM
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded">
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  Prepare Presentation
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Due: Today, 8:00 PM
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </li>
            <li className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded">
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  Buy Groceries
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Due: Today, 7:00 PM
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DemoPreview;
