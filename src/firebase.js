import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-83b96.firebaseapp.com",
  projectId: "tutorial-83b96",
  storageBucket: "tutorial-83b96.appspot.com",
  messagingSenderId: "209591991284",
  appId: "1:209591991284:web:8d3fb4ba4ed0849fe717a1",
  measurementId: "G-EN5Q4QKY30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
