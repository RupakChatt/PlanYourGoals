// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQxJaRIUZ_YjqSrC3ySYLP7jXUwn9gCD0",
  authDomain: "financial-planning-1709b.firebaseapp.com",
  projectId: "financial-planning-1709b",
  storageBucket: "financial-planning-1709b.appspot.com",
  messagingSenderId: "772844416733",
  appId: "1:772844416733:web:2c8066c27c48042e09b534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

