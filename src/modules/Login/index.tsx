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
        <div className='login'>
                <Link
                    className="login__create"
                    to={ERoutes.registration}
                >+ Create new Account</Link>
            <h4 className="login__title">Get in!</h4>
                <form className="login__form" onSubmit={handleSumbit}>
                    {authValues.map((authValue: any) => {
                        return <UserAuthValue {...authValue} class={"login__input"} />;
                    })}
                    <input
                        className="login__submit"
                        value='submit'
                        type='submit'
                    />
                </form>
        </div>
    );
};

export default Login;
