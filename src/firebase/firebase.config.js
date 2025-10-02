// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2MtAvZgLAvQ_ZaSfgdfa0PcV4rrvdFV8",
  authDomain: "todo-list-3e142.firebaseapp.com",
  projectId: "todo-list-3e142",
  storageBucket: "todo-list-3e142.firebasestorage.app",
  messagingSenderId: "320633502867",
  appId: "1:320633502867:web:f26925402804992ddfe166",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
