// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore}from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbjvATPR6hQS5rC0xrrQMPJa0GJGiqwro",
  authDomain: "supreme-tienda.firebaseapp.com",
  projectId: "supreme-tienda",
  storageBucket: "supreme-tienda.appspot.com",
  messagingSenderId: "98805612529",
  appId: "1:98805612529:web:d1ead33fc35db7ae978e50"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp) 
export const FirebaseDB = getFirestore(FirebaseApp) 