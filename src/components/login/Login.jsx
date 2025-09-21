import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleForm =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
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
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to this site please <Link to = '/register' className='text-blue-500'>Register</Link></p>
            </div>
            </div>
        </div>
        </div>    
    );
};

export default Login;