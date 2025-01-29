// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-e9375.firebaseapp.com",
  databaseURL: "https://ai-logo-e9375-default-rtdb.firebaseio.com",
  projectId: "ai-logo-e9375",
  storageBucket: "ai-logo-e9375.firebasestorage.app",
  messagingSenderId: "515910342282",
  appId: "1:515910342282:web:11a2404559aade8e0ebf73",
  measurementId: "G-3LH3MMJV46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)