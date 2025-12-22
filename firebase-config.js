// Firebase Configuration
// Replace these values with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyBSXOD8X1bO4aPz4z-DDgWkpSjz4Ufr4U4",
  authDomain: "st-mina-sttendance.firebaseapp.com",
  projectId: "st-mina-sttendance",
  storageBucket: "st-mina-sttendance.firebasestorage.app",
  messagingSenderId: "666476993228",
  appId: "1:666476993228:web:69269b1c6be2868d0a8069",
  measurementId: "G-73MJX51Y6V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
