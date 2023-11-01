import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// create context
const AuthContext = createContext();

// wrap all child components in project with AuthContext
export const AuthProvider = ({ children }) => {
  // this state checks if the user is an authenticated one
  const [user, setUser] = useState({});
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", email), {
      bookmarked: [],
    });
  };

  const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    return await signOut(auth);
  };

  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      checkUser();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ register, signIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// enables the values from auth context to be accesible from all compononents where userAuth is declared
export const userAuth = () => {
  return useContext(AuthContext);
};
