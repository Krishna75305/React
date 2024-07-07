// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZLmodfM_F8VA0kfVmhlBFR4kpNJKzsHY",
  authDomain: "vite-contact-4bd8c.firebaseapp.com",
  projectId: "vite-contact-4bd8c",
  storageBucket: "vite-contact-4bd8c.appspot.com",
  messagingSenderId: "237636899374",
  appId: "1:237636899374:web:fb4028f5e1b692c8e105bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);