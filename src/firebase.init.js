// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7qSSLIOmezCWB6fC8P7Uz6jq7x6WrVQs",
  authDomain: "react-auth-private-route-5c03e.firebaseapp.com",
  projectId: "react-auth-private-route-5c03e",
  storageBucket: "react-auth-private-route-5c03e.firebasestorage.app",
  messagingSenderId: "835308179554",
  appId: "1:835308179554:web:4d9cc8a9102ca7f7f8c13b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);