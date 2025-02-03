import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD7V4m3MFIwYvNazzRxpOWe3pAh8vgkOMk",
  authDomain: "vk-meeting.firebaseapp.com",
  projectId: "vk-meeting",
  storageBucket: "vk-meeting.firebasestorage.app",
  messagingSenderId: "148960660770",
  appId: "1:148960660770:web:74d893ca15b922f9d9a97b",
  measurementId: "G-XL16NGQMZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
