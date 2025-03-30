import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 py-7 max-w-xl mx-auto text-center">
      <h1 className="text-3xl text-teal-700 text-center font-semibold ">
        Sign Up
      </h1>
      <form className=" mt-6 flex flex-col gap-4 w-full sm:w-3/4 md:w-2/3 lg:w-3/5 mx-auto">
        <input type='text' id="name" placeholder="Full Name" className="border border-teal-900 focus:border-none bg-slate-100 p-3 rounded-lg focus:outline-teal-900" />
        <input type='email' id="email" placeholder="Email" className="border border-teal-900 focus:border-none bg-slate-100 p-3 rounded-lg focus:outline-teal-900" />
        <input type="password" id="password" placeholder="Password" className="border border-teal-900 focus:border-none bg-slate-100 p-3 rounded-lg focus:outline-teal-900" />
     
      <button className="group text-semibold bg-gradient-to-br from-teal-400 to-teal-700 p-3 rounded-full text-white transition-all duration-100 border-2 uppercase disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-br hover:from-white hover:to-transparent hover:border-teal-700 hover:text-teal-700">Sign Up</button>
      </form>

      <div className="flex gap-2 mt-2 justify-center">
        <p>Have an account? 
          <Link to="/signin"><span className="text-blue-500 underline ml-1">Sign in</span></Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
