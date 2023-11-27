import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
export const AuthContext = createContext(null)
const Auth = getAuth(app)
const Provider = ({ children }) => {
  const axiosPublic=useAxiosPublic()
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
    const subscribe = onAuthStateChanged(Auth, (currentUser) => {
      console.log(currentUser)
      setuser(currentUser)
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setloding(false);
                }
            })
    }
    else {
        // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        localStorage.removeItem('access-token');
        setloding(false);
    }

      
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