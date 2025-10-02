import React, { useContext, useState } from "react";
import AuthContext from "../services/AuthContext";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { users: user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleSingOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          {/* Cover Image */}
          <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Profile Section */}
          <div className="relative px-4 sm:px-6 lg:px-8 pb-6">
            {/* Profile Picture */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20">
              <div className="relative">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg object-cover"
                  referrerPolicy="same-origin"
                />
                {user?.verified && (
                  <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1.5 sm:p-2 border-2 border-white">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Name and Logout Button */}
              <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {user?.displayName}
                </h1>
                <p className="text-gray-600 mt-1 flex items-center justify-center sm:justify-start gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {user?.email}
                </p>
              </div>

              <button
                onClick={handleSingOut}
                className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Account Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Account Info
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Name</span>
                <span className="font-medium text-gray-900">
                  {user?.displayName}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Email</span>
                <span className="font-medium text-gray-900 text-sm sm:text-base break-all">
                  {user?.email}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Status</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-medium text-green-600">Active</span>
                </span>
              </div>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Additional Info
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Joined</span>
                <span className="font-medium text-gray-900">
                  {user?.metadata?.creationTime} 
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">lastSignInTime</span>
                <span className="font-medium text-gray-900 flex items-center gap-1">

                  {user?.metadata?.lastSignInTime
}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Verified</span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-blue-600">Yes</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
              125
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Posts</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
              850
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Followers</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-1">
              320
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Following</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
              95%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Engagement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
