// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-generator-8d05f.firebaseapp.com",
  projectId: "ai-logo-generator-8d05f",
  storageBucket: "ai-logo-generator-8d05f.firebasestorage.app",
  messagingSenderId: "763752483950",
  appId: "1:763752483950:web:0bb4779310038b7a8e6a7f",
  measurementId: "G-FP4TJJ5ZSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);