import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseSetup";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Sign In with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  // Sign In with github
  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => signInWithPopup(auth, githubProvider);

  // Create user method
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Update user displayName method
  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // Update user email method
  const updateUserEmail = (email) => {
    console.log(email);
    setLoading(true);
    return updateEmail(auth.currentUser, email);
  };

  // User sign in method
  const userSignIn = (email, pasasword) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pasasword);
  };

  // Reset password method
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Sign Out method
  const logOut = () => signOut(auth);

  const dest = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    createUser,
    userSignIn,
    updateUserProfile,
    updateUserEmail,
    resetPassword,
    logOut,
  };
  return <AuthContext.Provider value={dest}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
