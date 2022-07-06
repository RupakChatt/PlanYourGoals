import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';


  const AuthContext = createContext();

  export function AuthContextProvider({children}){
    const [user, setUser] = useState({})


    const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db, 'users', email), {
        userInfo: {}
    })
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    })

    return(
        <AuthContext.Provider value={{signup, login, logout, user }}>{children}</AuthContext.Provider>
    )
  }

export function UserAuth() {
    return useContext(AuthContext)
}