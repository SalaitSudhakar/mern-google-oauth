import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const techStack = [
    {
      title: "MongoDB",
      description: "NoSQL database for flexible user data storage",
    },
    {
      title: "Express",
      description: "Backend framework for robust API endpoints",
    },
    {
      title: "React",
      description: "Frontend library for responsive UI components",
    },
    {
      title: "Node.js",
      description: "JavaScript runtime for server-side operations",
    },
  ];
  return (
    <>
     {/* Tab title */}
      <Helmet>
        <title>Home - Auth App</title>
      </Helmet>

      <div className="bg-gradient-to-b from-teal-50 to-teal-100">
        {/* Welcome */}
        <div className="bg-teal-200  py-12">
          <div className="max-w-4xl mx-auto px-4  text-center">
            <h1 className="text-4xl font-bold mb-4 text-teal-800">
              Hey There👋!
            </h1>
            <p className=" text-lg mb-6 text-teal-600">
              I built this MERN stack authentication project to demonstrate my
              full-stack skills
            </p>
          </div>

          {/* Demo Login */}
          <div className=" flex justify-center mt-5">
            <div className="w-full max-w-md bg-teal-200 rounded-lg shadow-xl p-6">
              <div className="bg-teal-800 rounded-t-md p-4 flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-teal-200 text-sm ml-2">
                  Authentication Demo
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-teal-600 p-3 rounded">
                  <label className="block text-teal-200 text-sm mb-1">
                    Email
                  </label>
                  <input
                    className="w-full bg-teal-800 rounded p-2 text-white focus:outline-none"
                    type="text"
                    readOnly
                    placeholder="user@example.com"
                  />
                </div>
                <div className="bg-teal-600 p-3 rounded">
                  <label className="block text-teal-200 text-sm mb-1">
                    Password
                  </label>
                  <input
                    className="w-full bg-teal-800 rounded p-2 text-white focus:outline-none"
                    type="password"
                    readOnly
                    placeholder="••••••••"
                  />
                </div>
                <button className="w-full bg-teal-500 text-white py-2 rounded transition">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-teal-800 mb-8">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-lg shadow-gray-300 hover:shadow-lg hover:shadow-teal-700"
              >
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implemented Features */}
        <div className="border-t border-teal-400 bg-teal-200 py-8">
          <div className="max-w-4xl text-gray-700 mx-auto px-4 ">
            <h2 className="text-2xl text-teal-800 font-bold mb-3">
              What I Implemented
            </h2>
            <ul className=" list-disc space-y-2 list-inside">
              <li>JWT authentication with secure HTTP-only cookies</li>
              <li>Password hashing with bcrypt for secure storage</li>
              <li>User registration with email and Google Authentication</li>
              <li>Profile Page CRUD operation</li>
              <li>Image File handling with Cloudinary and Multer</li>
            </ul>
          </div>
        </div>

        {/* Simple Footer */}
        <footer className="bg-teal-700 text-teal-100 py-4 mt-auto">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <p className="text-sm text-gray-300">
              Built by -{" "}
              <span className="uppercase text-white"> Salait Sudhakar</span>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SalaitSudhakar/"
                target="_blank"
                className="text-teal-100 hover:text-teal-400 hover:underline"
              >
                GitHub
              </a>

              <div className="w-px h-5 bg-teal-400"></div>

              <a
                href="http://linkedin.com/in/salaitsudhakar/#"
                target="_blank"
                className="text-teal-100 hover:text-teal-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
