// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b3fb0.firebaseapp.com",
  projectId: "mern-auth-b3fb0",
  storageBucket: "mern-auth-b3fb0.firebasestorage.app",
  messagingSenderId: "729031024167",
  appId: "1:729031024167:web:a1dd709ba192aae5797802"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);