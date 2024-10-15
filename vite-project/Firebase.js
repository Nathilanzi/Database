// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA8ZhApFXbWHLnmVqNPkre9Ff0qbMSI3l8",
  authDomain: "youth-database-571ee.firebaseapp.com",
  projectId: "youth-database-571ee",
  storageBucket: "youth-database-571ee.appspot.com",
  messagingSenderId: "241799862047",
  appId: "1:241799862047:web:e0c804ae3924012886022a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app };
