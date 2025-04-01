import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../Redux/UserSlice/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { isLoading, currentUser, error } = useSelector((state) => state.user);
  const defaultImage = currentUser?.user?.profile;
  const defaultUsername = currentUser?.user?.username;
  const defaultEmail = currentUser?.user?.email;

  console.log(currentUser);
  
  const fileRef = useRef(null);
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [username, setUsername] = useState(currentUser?.user?.username);
  const [email, setEmail] = useState(currentUser?.user?.email);
  const [password, setPassword] = useState("");

  const [updateSuccess, setUpdateSuccess] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("On submit event triggered: ");

    // Use FormData to send both text and file data
    const formData = new FormData();
    formData.append("username", username || defaultUsername);
    formData.append("email", email || defaultEmail);
    if (password) formData.append("password", password);
    formData.append("profile", image || defaultImage);

    // Debugging: Log the form data entries

    console.log("formData: ", formData.get("email"));
    console.log("formData: ", formData.get("username"));
    console.log("formData: ", formData.get("profile"));
    try {
      dispatch(updateUserStart());

      console.log("API triggered");
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/update/${
          currentUser?.user?._id
        }`,
        {
          method: "PUT",
          body: formData,
          credentials: "include",
        }
      );

      const data = await response.json();

      console.log(data)

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      console.log("Error Updating User: ", error);
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/delete/${
          currentUser?.user?._id
        }`,
        {
          method: "DELETE",
          credentials: "include"
        }
      );

      const data = await response.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signout`, {
        method: "POST",
      });
      dispatch(signOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-5 text-teal-800">
        Profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
        <img
          src={
            image
              ? URL.createObjectURL(image)
              : currentUser?.user?.profile || defaultImage
          }
          alt="profile"
          onClick={() => fileRef.current.click()}
          className="h-24 w-24 mb-4 self-center cursor-pointer rounded-full object-cover border-2 border-teal-900"
        />
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="bg-teal-100 rounded-lg p-3"
        />
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-teal-100 rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-teal-100 rounded-lg p-3"
        />
        {error && (
          <p className="text-red-700 mt-3 text-center"> {error?.message} </p>
        )}
        {updateSuccess && (
          <p className="text-green-700 mt-5">User updated successfully!</p>
        )}
        <button className="group text-semibold bg-gradient-to-br from-teal-400 to-teal-700 p-3 rounded-full text-white transition-all duration-100 border-2 uppercase disabled:opacity-50 disabled:pointer-events-none hover:from-teal-300 hover:to-teal-500">
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between items-center mt-3">
        <span
          onClick={handleDeleteAccount}
          className="text-red-700 cursor-pointer"
        >
          Delete Account
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
