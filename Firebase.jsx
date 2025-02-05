import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyBhSt6VEftZ4KZJ8Q9J45a220Q0HZQ3e18",
  authDomain: "final-4ff69.firebaseapp.com",
  projectId: "final-4ff69",
  storageBucket: "final-4ff69.firebasestorage.app",
  messagingSenderId: "600298213131",
  appId: "1:600298213131:web:e6c34e5184d5f3ed525c0e",
  measurementId: "G-GF6EZVW2X8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);