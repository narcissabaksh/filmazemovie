import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF91pxgOgaGMrVZb7rq_4ZP1cxORXbZ3s",
  authDomain: "filmaze-10938.firebaseapp.com",
  projectId: "filmaze-10938",
  storageBucket: "filmaze-10938.appspot.com",
  messagingSenderId: "197382631063",
  appId: "1:197382631063:web:19ac331727a6341cee03d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
