import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../Redux/UserSlice/userSlice.js";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
          credentials: "include",
        }
      );

      const data = await response.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not Login with Google: " + error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-gradient-to-br from-red-400 to-red-500 p-3 rounded-full text-white transition-all duration-100 hover:text-white border-2  hover:from-red-300 hover:to-red-500"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
