import React from 'react';
import {Link } from 'react-router-dom';

function Login (props){
    const { signInWithGoogle, history } = props;

    function login(){
        signInWithGoogle();
        history.push('/');
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <p>Login</p>
            <button 
                className="btn btn-outline-dark"
                onClick={login}
            >
                Sign in with Google 
            </button>
        </div>
    );
}

export default Login;