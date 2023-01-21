import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const UserContext = createContext();
export function UserAuth() {
  return useContext(UserContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState("");
  const provider = new GoogleAuthProvider();
  const providerfacebook = new FacebookAuthProvider();
  const navigate = useNavigate();
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  function googlehandler() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function facebookhandler() {
    signInWithPopup(auth, providerfacebook)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  }
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
     
    });
    return () => {
      unsuscribe();
    };
  });
  return (
    <UserContext.Provider
      value={{ signup, login, currentUser, logout, googlehandler,facebookhandler}}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
