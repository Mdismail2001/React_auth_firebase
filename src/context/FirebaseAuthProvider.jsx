import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '/src/firebase.init';

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

// for register 
    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email, password );
    }
// for login
    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password);
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
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo ={
       createUser,
       signInUser,
       user
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthProvider;