// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-72ece.firebaseapp.com",
  projectId: "mern-estate-72ece",
  storageBucket: "mern-estate-72ece.appspot.com",
  messagingSenderId: "140576656173",
  appId: "1:140576656173:web:02564976ff6212ec2f61a4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
