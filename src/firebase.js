import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tidal-glider-289101.firebaseapp.com",
  projectId: "tidal-glider-289101",
  storageBucket: "tidal-glider-289101.appspot.com",
  messagingSenderId: "175878240021",
  appId: "1:175878240021:web:f8e087747d5f7601b01b1c",
  measurementId: "G-05R0SG515H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();


