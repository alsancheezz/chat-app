// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8o1vYOeWzozzJwO37nwYjxIiOUlqQ3_M",
  authDomain: "chat-app-6e156.firebaseapp.com",
  projectId: "chat-app-6e156",
  storageBucket: "chat-app-6e156.appspot.com",
  messagingSenderId: "760685464157",
  appId: "1:760685464157:web:f644e6533700ff54441bb4",
  measurementId: "G-E9DK37DKMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
