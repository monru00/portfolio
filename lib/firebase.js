import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7n0UOzUVOp9c6JK1FFh8XdL8Xhbde458",
  authDomain: "portfolioform-4e18e.firebaseapp.com",
  projectId: "portfolioform-4e18e",
  storageBucket: "portfolioform-4e18e.firebasestorage.app",
  messagingSenderId: "560797203671",
  appId: "1:560797203671:web:df0cc65d42f9dbcbc80492",
  measurementId: "G-5XT50161TS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
