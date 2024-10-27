// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD40VNuSvK4UD45C4w4gP06Yc3CavttJKA",
  authDomain: "student-q-a-portal.firebaseapp.com",
  projectId: "student-q-a-portal",
  storageBucket: "student-q-a-portal.appspot.com",
  messagingSenderId: "425440896889",
  appId: "1:425440896889:web:f3a594b23a17e7e5f7b1a8",
  measurementId: "G-WF63T93835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };