import React, { createContext, useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged,   signInWithEmailAndPassword, signOut, updateEmail, sendPasswordResetEmail,} from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}){
    const [currentUser, setCurrentUser ] = useState();

    function logOut(){
        return signOut(auth);
    }

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    function resetPassword(email){
        return sendPasswordResetEmail(auth, email);
    }

    function updateEmailAddress(newEmail){
        return updateEmail(currentUser, newEmail)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
        })
        return unsubscribe;
    }, []);

    return(
        <AuthContext.Provider 
            value={{
                currentUser: currentUser,
                signUp: signUp,
                signIn: signIn,
                logOut: logOut,
                resetPassword: resetPassword,
                
                updateEmailAddress: updateEmailAddress,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
 
