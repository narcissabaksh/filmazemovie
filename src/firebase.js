import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGEJcVwRyPFVOsssDqF8sMnEziqkekHFE",
  authDomain: "filmaze-react.firebaseapp.com",
  projectId: "filmaze-react",
  storageBucket: "filmaze-react.appspot.com",
  messagingSenderId: "810417504882",
  appId: "1:810417504882:web:1373048299bb54826f38eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
