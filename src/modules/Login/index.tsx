/* eslint-disable arrow-body-style */
/** just for test rigth now */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import { loginUser } from '../../app/store/actions/user';

import { ERoutes } from '../../routes';

import { UserAuthValue } from '../../app/components/common/UserAuthValue';

import './index.scss';
import { authValues } from './consts';
import { IField } from './interface';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: {
            value: '',
            error: '',
        },
        password: {
            value: '',
            error: '',
        },
    });

    const handleChange = (fieldName: string) => (value: string) => {
        const newForm = {
            ...form,
            [fieldName]: { value: value, error: !value },
        };
        setForm(newForm);
    };

    const handleSumbit = (e: any) => {
        e.preventDefault();
        if (!form.email.value || !form.password.value) {
            return;
        }
        dispatch(
            loginUser({
                email: form.email.value,
                password: form.password.value,
            })
        );
    };

    return (
        <div className='login'>
            <Link className='login__create' to={ERoutes.registration}>
                + Create new Account
            </Link>
            <h4 className='login__title'>Get in!</h4>
            <form className='login__form' onSubmit={handleSumbit}>
                {/* @ts-ignore */}
                {authValues.map((authValue: IField, index) => {
                    return (
                        <UserAuthValue
                            {...authValue}
                            handleChange={handleChange(authValue.name)}
                            error={form[authValue.name]?.error}
                            value={form[authValue.name]?.value}
                            // className={'login__input'}
                            key={index}
                        />
                    );
                })}
                <input
                    className={cs(
                        'login__submit',
                        form.email.value &&
                            form.password.value &&
                            'login__submit-valid'
                    )}
                    value='submit'
                    type='submit'
                />
            </form>
        </div>
    );
};

export default Login;
