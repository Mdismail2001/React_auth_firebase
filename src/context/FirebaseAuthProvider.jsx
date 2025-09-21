import React from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '/src/firebase.init';

const FirebaseAuthProvider = ({ children }) => {
// for register 
    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email, password );
    }
// for login
    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
// for current user 
    onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            console.log("has current user:", currentUser)
        }
        else{
            console.log('current user', currentUser)
        }

    })
    const userInfo ={
       createUser,
       signInUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthProvider;