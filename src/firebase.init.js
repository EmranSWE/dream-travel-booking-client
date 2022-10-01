// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZQUOCUIy9UPTUFagv2m8JuD8jvtt4IyA",
  authDomain: "dream-hotel-booking.firebaseapp.com",
  projectId: "dream-hotel-booking",
  storageBucket: "dream-hotel-booking.appspot.com",
  messagingSenderId: "149930536562",
  appId: "1:149930536562:web:1967bc590d63ea322d5ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;