import React from "react";

function Footer() {
  return (
    <footer className=" dark:bg-black text-gray-700 dark:text-gray-300 py-4 md:py-8 lg:py-12 mt-4 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            About
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            MyTodoApp helps you organize your tasks efficiently, track your progress, and stay productive every day.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Contact
          </h3>
          <p>Email: support@mytodoapp.com</p>
          <p>Phone: +880 1234 5678</p>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Policies
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyTodoApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
