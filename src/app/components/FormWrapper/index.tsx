import cs from 'classnames';
import { FormEventHandler } from 'react';
import './styles.scss';

export const FormWrapper: React.FC<{
    handleSumbit: () => void;
    isValidForm: boolean;
}> = ({ children, handleSumbit, isValidForm }) => {
    const onSubmit = (e: any) => {
        e.preventDefault();
        handleSumbit();
    };
    return (
        <form className='login__form' onSubmit={onSubmit}>
            {children}
            <input
                className={cs(
                    'login__submit',
                    isValidForm && 'login__submit-valid'
                )}
                value='submit'
                type='submit'
            />
        </form>
    );
};
