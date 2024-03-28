import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut, // Renaming to avoid conflicts
  onAuthStateChanged,
} from 'firebase/auth';

import {setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize as null

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);

    setDoc(doc(db, 'users', email), {
      savedShows: []
  })
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password); // Corrected function name
  }

  function signOut() {
    return firebaseSignOut(auth); // Corrected function name
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []); // Added empty dependency array

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
