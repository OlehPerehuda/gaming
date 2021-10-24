/* eslint-disable arrow-body-style */
/** just for test rigth now */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { loginUser } from '../../app/store/actions/user';

import { ERoutes } from '../../routes';

import { UserAuthValue } from '../../app/components/common/UserAuthValue';

import './index.scss';
import { FormWrapper } from '../../app/components/FormWrapper';
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

    const handleSumbit = () => {
        if (form.email.value && form.password.value) {
            dispatch(
                loginUser({
                    email: form.email.value,
                    password: form.password.value,
                })
            );
        }
    };
const { formatMessage } = useIntl();
    const list = authValues(formatMessage);

    return (
        <div className='login'>
            <Link className='login__create' to={ERoutes.registration}>
                <FormattedMessage
                    id='create_new'
                    defaultMessage='+ Create new Account'
                />
            </Link>
            <h4 className='login__title'>
                <FormattedMessage
                    id='get_in'
                    defaultMessage='Get in!'
                />
            </h4>
            <FormWrapper
                handleSumbit={handleSumbit}
                isValidForm={!!form.email.value && !!form.password.value}
            >
                {/* @ts-ignore */}
                {list.map((authValue: IField, index) => {
                    return (
                        <UserAuthValue
                            {...authValue}
                            handleChange={handleChange(authValue.name)}
                            error={form[authValue.name]?.error}
                            value={form[authValue.name]?.value}
                            key={index}
                        />
                    );
                })}
            </FormWrapper>
        </div>
    );
};

export default Login;
