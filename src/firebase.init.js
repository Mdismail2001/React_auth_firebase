// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { auth } from '/src/firebase.init';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBURAWkUUazZBG7tMrk7vrm51xmpmWH2Hs",
  authDomain: "auth-firebase-aba44.firebaseapp.com",
  projectId: "auth-firebase-aba44",
  storageBucket: "auth-firebase-aba44.firebasestorage.app",
  messagingSenderId: "798136242199",
  appId: "1:798136242199:web:c48c01e2ecb1e8c4558c52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);