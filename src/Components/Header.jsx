import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoIcon from "../Utility/LogoIcon";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-teal-700 text-white py-4 px-2 sm:px-4 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-2">
          {/* Logo */}
          <LogoIcon />
          <Link to="/">
            <h1 className="font-bold text-xl text-gray-200 hover:text-white">
              AUTH APP
            </h1>
          </Link>
        </div>
        <ul className="flex gap-3 text-emerald-200 ">
          <Link to="/">
            <li className="hover:text-emerald-500 hover:underline transition">Home</li>
          </Link>
          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser?.user?.profile}
                alt="profile"
                title="View Profile"
                className="h-7 w-7 rounded-full object-cover border-2 border-white"
              />
            </Link>
          ) : (
            <Link to="/signin">
              <li className=" hover:bg-emerald-900 hover:text-gray-200 shadow-lg border border-teal-800 bg-white text-teal-700 px-3 py-1 rounded-4xl transition-all duration-150">Sign-In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>

    
  );
};

export default Header;
