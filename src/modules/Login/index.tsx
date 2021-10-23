/** just for test rigth now */
import React, { useState } from 'react';
import getAuth from 'firebase/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    const login = () => {
        console.log('login');
        const a = getAuth();
    };
    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password'
                />
                <input
                    value="login"
                    type='submit'
                />
            </form>
        </>
    )
};

export default Login;
