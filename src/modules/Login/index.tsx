/** just for test rigth now */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { User } from 'firebase/auth';
import { firebaseAuth } from '../../firebase';

import { loginUser } from '../../app/store/actions/user';

import { RouteConfig } from '../../routes';

import { UserAuthValue } from '../../app/components/common/UserAuthValue';

import './index.scss';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSumbit = (e: any) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    /** auth user values that will send to DB */
    const authValues = [
        {
            email,
            placeHolder: 'Enter Your Email',
            type: 'email',
            handleChange: setEmail,
        },
        {
            password,
            placeHolder: 'Enter password',
            type: 'password',
            handleChange: setPassword,
        }
    ];
    return (
        <>
            <h1>SIGN IN</h1>
            <form onSubmit={handleSumbit}>
                <form onSubmit={handleSumbit}>
                    {authValues.map((authValue: any) => {
                        return <UserAuthValue {...authValue} />
                    })}
                    <input
                        value='submit'
                        type='submit'
                    />
                </form>
            </form>
            <div>
                <p>Don't have an account?</p>
                <Link to={RouteConfig.Registration.path}>
                    Sign Up
                </Link>
            </div>
        </>
    )
};

export default Login;
