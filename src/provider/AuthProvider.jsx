import React, { useEffect, useState } from "react";
import AuthContext from "../services/AuthContext";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Crate user by email and password

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in user with email and password

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sing in
  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
  }
  // Auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);
  const logOut = () =>{
    return signOut(auth)
  }
  const authInfo = {
    createUser,
    GoogleSignIn,
    users,
    setUsers,
    singIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
