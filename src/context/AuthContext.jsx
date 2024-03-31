import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut, 
  onAuthStateChanged,
} from 'firebase/auth';

import { setDoc, doc } from 'firebase/firestore';

// authentication state  və funksiyalarını idarə etmək üçün kontekst yaratmaq
const AuthContext = createContext();

// Provider component bütün tətbiqi əhatə etmə
export function AuthContextProvider({ children }) {
  //  current userın authentication details saxlayırıq
  const [user, setUser] = useState(null); 

  //  yeni userin email və şifrə ilə hesab yaratması üçün
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);

    //  firestoreda user üçün yeni document yaradırıq bizə verilən data ilə
    setDoc(doc(db, 'users', email), {
      savedShows: []
    });
  }

  //  bizdə olan userin email və şifrə ilə hesabında daxil olması üçün
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // hesabdan çıxış etmək üçün
  function signOut() {
    return firebaseSignOut(auth);
  }

  //  authentication state  dəyişikliklərinə abunə olmaq
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []); // Boş array effektin yalnız bir dəfə işləməsini təmin edir

  // Kontekst vasitəsilə authentication state və funksiyalarının təmin edilməsi
  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to consume authentication context within components
export function UserAuth() {
  return useContext(AuthContext);
}
