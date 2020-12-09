import React from 'react';
import { useHistory } from "react-router";
import { isAuthenticated } from './auth';

const Login = () => {
    let history = useHistory();

    function Login() {
        console.log('login');
        localStorage.setItem('login', 'true');
        history.push("/");
    }

    return (
        isAuthenticated() ? (Login()) : (
            <div>
                <h1>Login</h1>

                <button onClick={() => Login()}>Entrar</button>
            </div>)
    );
};

export default Login;