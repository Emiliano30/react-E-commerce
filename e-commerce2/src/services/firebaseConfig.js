// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCBIERUnSRV0i7ByUCLuz-gd8r5Ydq8ng",
  authDomain: "ecommerce-react-ccd6d.firebaseapp.com",
  projectId: "ecommerce-react-ccd6d",
  storageBucket: "ecommerce-react-ccd6d.firebasestorage.app",
  messagingSenderId: "452894572283",
  appId: "1:452894572283:web:96fe6ff1749607dbab3a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)