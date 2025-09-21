import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '/src/firebase.init';

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

// for register 
    const createUser = (email , password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password );
    }
// for login
    const signInUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
// sign out
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }

 // for current user 
//     onAuthStateChanged(auth,(currentUser)=>{
//         if(currentUser){
//             console.log("has current user:", currentUser)
//         }
//         else{
//             console.log('current user', currentUser)
//         }
//     })

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('current user inside useEffect on state change', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo ={
       createUser,
       signInUser,
       user,
       signOutUser,
       loading
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthProvider;