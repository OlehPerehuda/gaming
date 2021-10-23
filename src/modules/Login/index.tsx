/** just for test rigth now */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../../app/store/actions/user';

import { ERoutes } from '../../routes';

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
        },
    ];
    return (
        <div className='login__wrapper'>
            <h4>Get in!</h4>
            <form onSubmit={handleSumbit}>
                <form onSubmit={handleSumbit}>
                    {authValues.map((authValue: any) => {
                        return <UserAuthValue {...authValue} />;
                    })}
                    <input value='submit' type='submit' />
                </form>
            </form>
            <div>
                <p>Don't have an account?</p>
                <Link to={ERoutes.registration}>Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;
