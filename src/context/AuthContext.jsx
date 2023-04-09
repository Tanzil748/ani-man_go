import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// create context
const AuthContext = createContext();

// wrap all child components in project with AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const register = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
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
  });

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
