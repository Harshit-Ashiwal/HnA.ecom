// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDI0J6c19lLEch2wWn1I7SANGa7P-QSUh8",
  authDomain: "fir-auth-hna.firebaseapp.com",
  projectId: "fir-auth-hna",
  storageBucket: "fir-auth-hna.appspot.com",
  messagingSenderId: "39496262399",
  appId: "1:39496262399:web:d9eaae5cce3d5d517262ca",
  measurementId: "G-2QWX5D85VQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
