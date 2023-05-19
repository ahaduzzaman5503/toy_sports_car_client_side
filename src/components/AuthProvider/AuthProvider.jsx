import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
 
export const AuthContext = createContext(null)

    const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password)
      };

      const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, curentUser => {
                console.log('Auth state change', curentUser);
                setUsers(curentUser);
                setLoading(false)
            })
            return () => {
                unsuscribe();
            }
        }, [])

    const authInfo = {
        users,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;