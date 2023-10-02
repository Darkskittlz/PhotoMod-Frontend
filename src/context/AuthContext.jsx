import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { auth } from '../services/firebase'


const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            //The object I get back in this console.log shows the response object I get back from firebase from the created user
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        //don't forget to pass my functions in my AuthContextProvider to my UserContext.Provider so they're accessible throughout the rest of my app
        <UserContext.Provider value={{ createUser, user, signIn, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
};
