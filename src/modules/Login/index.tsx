/** just for test rigth now */
import React from 'react';
import { getAuth } from 'firebase/auth';

const Login: React.FC = () => {
    const login = () => {
        console.log('login');
        const a = getAuth();
    };
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={login}>LOGIN</button>
        </>
    );
};

export default Login;
