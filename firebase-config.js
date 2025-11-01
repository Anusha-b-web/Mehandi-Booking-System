import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaSWd5MiyTH87wPN6D8olGFI9ZduPbG58",
  authDomain: "app1-832c1.firebaseapp.com",
  databaseURL: "https://app1-832c1-default-rtdb.firebaseio.com",
  projectId: "app1-832c1",
  storageBucket: "app1-832c1.firebasestorage.app",
  messagingSenderId: "668966971517",
  appId: "1:668966971517:web:2342fa5bb3670fad446914",
  measurementId: "G-B3SQTWR5GM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child };
