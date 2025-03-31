import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message);
      }

      setIsLoading(false);
      navigate('/')
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong. Please try again");
      console.log(error);
    }
  };

  return (
    <div className="p-3 py-7 max-w-xl mx-auto text-center">
      <h1 className="text-3xl text-teal-700 text-center font-semibold ">
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" mt-6 flex flex-col gap-4 w-full sm:w-3/4 md:w-2/3 lg:w-3/5 mx-auto"
      >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border border-teal-900 focus:border-none bg-slate-100 p-3 rounded-lg focus:outline-teal-900"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="border border-teal-900 focus:border-none bg-slate-100 p-3 rounded-lg focus:outline-teal-900"
          onChange={handleChange}
          required
        />

        {error && <p className="text-red-700 text-sm -mb-4">{error}</p>}

        <button
          disabled={isLoading}
          className="group text-semibold bg-gradient-to-br from-teal-400 to-teal-700 p-3 rounded-full text-white transition-all duration-100 border-2 uppercase disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-br hover:from-white hover:to-transparent hover:border-teal-700 hover:text-teal-700"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-2 justify-center">
        <p>
          Dont Have an Account
          <Link to="/signup">
            <span className="text-blue-500 underline ml-1">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
