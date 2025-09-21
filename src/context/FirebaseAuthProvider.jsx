import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '/src/firebase.init';

const FirebaseAuthProvider = ({ children }) => {

    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email, password );
    }

    const userInfo ={
       createUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthProvider;