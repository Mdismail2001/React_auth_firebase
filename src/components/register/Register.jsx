import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '/src/firebase.init';

const Register = () => {
    const handleForm =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password) // get user info from register form 
        // register with firebase function
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error.message)
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleForm} className="fieldset">
                <label className="label">Name</label>
                <input type="name" className="input" name='name' placeholder="Name" />

                <label className="label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" />
                <button className="btn btn-neutral mt-4">Registration</button>
                </form>
                <p> Already have an account? Please <Link to = '/login' className='text-blue-500'>Login</Link></p>
            </div>
            </div>
        </div>
        </div>    
    );
};

export default Register;