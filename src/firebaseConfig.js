// Import Firebase core and required services
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgOqy0JWEu-_Sf0sPEQm5ad3_pe6YhI0k",
  authDomain: "movie-ticket-booking-44d08.firebaseapp.com",
  projectId: "movie-ticket-booking-44d08",
  storageBucket: "movie-ticket-booking-44d08.appspot.com", // Fixed URL
  messagingSenderId: "33744632076",
  appId: "1:33744632076:web:efa9883192abbb94423129",
  measurementId: "G-335ZH6C6QS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

