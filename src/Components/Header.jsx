import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-teal-700 text-white py-4 px-2 sm:px-4 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">AUTH APP</h1>
        <ul className="flex gap-3">
           <Link to="/"><li>Home</li></Link> 
           <Link to="/about"><li>About</li></Link>
           <Link to="/signin"><li>Sign-In</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
