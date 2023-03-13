import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf1kIGikJUBp1tuLF6iiYq-lGNwD5_UQ4",
  authDomain: "react-netflix-6b1fb.firebaseapp.com",
  projectId: "react-netflix-6b1fb",
  storageBucket: "react-netflix-6b1fb.appspot.com",
  messagingSenderId: "374677041189",
  appId: "1:374677041189:web:b935950c89a1a7bedfcfcc",
  measurementId: "G-7KWKEHJ63Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);