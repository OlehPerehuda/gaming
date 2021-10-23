/** just for test rigth now */
import React from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    User,
} from 'firebase/auth';
import { firebaseApp, firebaseAuth } from '../../firebase';
import { useEffect } from 'react';
import { useState } from 'react';

const Login: React.FC = () => {
    const [user, setUser] = useState<User | null>();
    const login = async () => {
        const auth = getAuth();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                'test122@gmail.com',
                'test123'
            );
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((_user) => {
            setUser(_user);
        });
    }, []);

    return (
        <>
            <h1>Login Page</h1>
            {user?.email}
            <button onClick={login}>LOGIN</button>
        </>
    );
};

export default Login;
