import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkr6C9AId9Kv5MSxiAZ10u3Wl_0a37FmQ",
  authDomain: "tech-janta-party.firebaseapp.com",
  projectId: "tech-janta-party",
  storageBucket: "tech-janta-party.firebasestorage.app",
  messagingSenderId: "903290859841",
  appId: "1:903290859841:web:ff700da7111d85e38f71c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };