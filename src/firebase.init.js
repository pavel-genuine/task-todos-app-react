// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjUvzOpF8Ydp5kfo8eN9GJa-af5jCv_hU",
  authDomain: "todo-list-calendar-5ed9e.firebaseapp.com",
  projectId: "todo-list-calendar-5ed9e",
  storageBucket: "todo-list-calendar-5ed9e.appspot.com",
  messagingSenderId: "471474153452",
  appId: "1:471474153452:web:5c87f5be3ec2821d5402c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;