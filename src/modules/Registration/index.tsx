/** just for test rigth now */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../app/store/actions/user';

import { ERoutes } from '../../routes';

import { UserAuthValue } from '../../app/components/common/UserAuthValue';

import './index.scss';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSumbit = (e: any) => {
        e.preventDefault();
        dispatch(registerUser({ email, password }));
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
        },
        {
            firstName,
            placeHolder: 'Please, enter first name',
            type: 'text',
            handleChange: setFirstName,
        },
        {
            lastName,
            placeHolder: 'Please, enter last name',
            type: 'text',
            handleChange: setLastName,
        },
    ];

    return (
        <>
            <h1>SIGN UP</h1>
            <form onSubmit={handleSumbit}>
                {authValues.map((authValue: any) => {
                    return <UserAuthValue {...authValue} />;
                })}
                <input value='submit' type='submit' />
            </form>
            <div>
                <div>
                    <p>Already registred?</p>
                    <Link to={ERoutes.login}>Sign In</Link>
                </div>
            </div>
        </>
    );
};

export default Login;
