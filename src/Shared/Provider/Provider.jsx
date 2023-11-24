import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
export const AuthContext = createContext(null)
const Auth = getAuth(app)
const Provider = ({ children }) => {
  const [user, setuser] = useState();
  const [loding, setloding] = useState(true)
  const provider = new GoogleAuthProvider()

  const googlesignup = () => {
    setloding(false)
    return signInWithPopup(Auth, provider)
  }
  const createuser = (email, password) => {
    setloding(false)
    return createUserWithEmailAndPassword(Auth, email, password)
  }
  const loginUser = (email, password) => {
    setloding(false)
    return signInWithEmailAndPassword(Auth, email, password)
  }
  const logout = () => {
    setloding(false)
    signOut(Auth)
  }
  const ubdateUser = (name, photo) => {
    setloding(false)
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() => {
    const subscribe = onAuthStateChanged(Auth, (currentuser) => {
      console.log(currentuser)
      setuser(currentuser)
      setloding(false)
    });
    return () => {
      subscribe()
    }
  }, [])

  const AuthInfo = { user,loding, googlesignup, createuser, loginUser, ubdateUser, logout }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;