import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(currentUser)
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      
    }


  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-5 text-teal-800">
        Profile
      </h1>
      <form className="flex flex-col gap-4 mt-5">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
        <img
          src={currentUser.data.profile}
          alt="profile"
          onClick={() => fileRef.current.click()}
          className="h-24 w-24 mb-4 self-center cursor-pointer rounded-full object-cover border-2 border-teal-900"
        />
        <input
          type="text"
          id="username"
          defaultValue={currentUser.data.username} 
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          className="bg-teal-100 rounded-lg p-3"
        />
        <input
          type="email"
          id="email"
          defaultValue={currentUser.data.email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          className="bg-teal-100 rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          className="bg-teal-100 rounded-lg p-3"
        />
        <button
          onClick={handleSubmit}
          className="group text-semibold bg-gradient-to-br from-teal-400 to-teal-700 p-3 rounded-full text-white transition-all duration-100 border-2 uppercase disabled:opacity-50 disabled:pointer-events-none hover:from-teal-300 hover:to-teal-500  "
        >
          Update
        </button>
      </form>
      <div className="flex justify-between items-center mt-3">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
