// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,  
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// doc = allows us to retrieve documents inside of our fire store database.
// getDoc, setDoc = where doc allows us to access the document both are use the get and set data inside the document.
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
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
// once we  instanciated out firestore now we can use in order the access our database.thsi is used to get the document getdoc and setdoc.
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
