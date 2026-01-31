import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-white bg-[#48c8db]">
      <div className="flex justify-center">
        <div className="max-w-[1100px] w-full px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-indigo-100 transition duration-200"
          >
            Home Page
          </Link>
          <Link
            to="/about"
            className="text-2xl font-bold hover:text-indigo-100 transition duration-200"
          >
            About Page
          </Link>
          <Link
            to="/add"
            className="text-2xl font-bold hover:text-indigo-100 transition duration-200"
          >
            Add Music
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;