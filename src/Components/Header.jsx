import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser.user.profile)

  return (
    <div className="bg-teal-700 text-white py-4 px-2 sm:px-4 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-xl text-gray-200 hover:text-white">
            AUTH APP
          </h1>
        </Link>
        <ul className="flex gap-3 text-emerald-200 ">
          <Link to="/">
            <li className="hover:text-emerald-500">Home</li>
          </Link>
          {currentUser ? (
            <Link to="/profile"><img src={currentUser?.user?.profile} alt='profile' className="h-7 w-7 rounded-full object-cover"/></Link>
          ) : (
            <Link to="/signin">
              <li className="hover:text-emerald-500">Sign-In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
