import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage, useIntl } from 'react-intl';

import { FormWrapper } from "../../app/components/FormWrapper";
import { UserAuthValue } from "../../app/components/common/UserAuthValue";

import { RootState } from "../../app/store";
import { editProfileFormConfig } from "./consts";

import { updateUser } from "../../app/store/actions/user";

import './index.scss';

const Edit: React.FC = () => {
    const dispatch = useDispatch();
    const { email, firstName, lastName, image } = useSelector((state: RootState) => state.user);
    const [isShowChangeField, setIsChangeShowField] = useState<boolean>(false);

    const changeProfile = () => {
        setIsChangeShowField((prev) => !prev);
    };

    const [form, setForm] = useState<any>({
        firstName: {
            value: firstName,
            error: false,
        },
        lastName: {
            value: lastName,
            error: false,
        },
        image: {
            value: '',
            error: false,
        },
    });

    const handleChange = (fieldName: string) => (value: string) => {
        const newForm = { ...form, [fieldName]: { value, error: !value } };
        setForm(newForm);
    };

    const handleSumbit = () => {
        dispatch(updateUser({
            image: form.image.value,
            firstName: form.firstName.value,
            lastName: form.lastName.value,
        }));
    };

    const { formatMessage } = useIntl();

    return (
        <section className="edit">
            <h1 className="edit__title">
                <FormattedMessage
                    id='editProfile'
                    defaultMessage='Edit Your Profile'
                />
            </h1>
            <div className="edit__profile">
                <div className="edit__profile__information">
                    {!isShowChangeField && <>
                        <div >
                            <FormattedMessage
                                id='editEmail'
                                defaultMessage='Email'
                            />
                            <span>
                                {email}
                            </span>
                        </div>
                        <div >
                            <FormattedMessage
                                id='editFirstName'
                                defaultMessage='FirstName'
                            />
                            <span>
                                {firstName}
                            </span>
                        </div>
                        <div >
                            <FormattedMessage
                                id='editLastName'
                                defaultMessage='LastName'
                            />
                            <span>
                                {lastName}
                            </span>
                        </div>
                        <input
                            className="edit__profile__information__back"
                            value={formatMessage({ id:'btnEditProfile', defaultMessage: 'Edit profile' })}
                            type='button'
                            onClick={changeProfile}
                        /></>}
                    {isShowChangeField && <FormWrapper handleSumbit={handleSumbit} isValidForm={true}>
                        {editProfileFormConfig.map((authValue: any) => {
                            return (
                                <UserAuthValue
                                    {...authValue}
                                    handleChange={handleChange(authValue.name)}
                                    value={form[authValue.name].value}
                                    error={form[authValue.name].error}
                                />
                            );
                        })}
                        <input
                            className="edit__profile__back"
                            value="Back to profile"
                            type='button'
                            onClick={changeProfile}
                        />
                    </FormWrapper>}
                </div>
                <img
                    className="edit__profile__picture"
                    src={image}
                    alt="profile"
                />
            </div>
        </section>
    );
}

export default Edit;
