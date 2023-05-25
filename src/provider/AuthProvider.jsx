import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseSetup";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
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
  const updateUserDisplayName = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // Sign Out method
  const logOut = () => signOut(auth);

  const dest = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    createUser,
    updateUserDisplayName,
    logOut,
  };
  return <AuthContext.Provider value={dest}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
