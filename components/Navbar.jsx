import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 p-3">
      <div className="container mx-auto max-w-screen-lg flex flex-row justify-center items-center">
        <div className="relative flex flex-row items-center gap-3">
          <span className="absolute ml-4 text-gray-500 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            className="px-12 w-full h-12 border border-gray-500 rounded-full"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
