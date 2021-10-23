import cs from 'classnames';
import './styles.scss';

export const UserAuthValue: React.FC<{
    value: string;
    placeHolder: string;
    type: string;
    handleChange: (value: string) => void;
    error: string;
}> = ({ value, placeHolder, type, handleChange, error }) => {
    return (
        <>
            <input
                className={cs(error && 'input__error', 'auth__input')}
                value={value}
                placeholder={placeHolder}
                type={type}
                onChange={(e: any) => handleChange(e.target.value)}
            />
            {error && (
                <span className='error__message'>Field is required!</span>
            )}
        </>
    );
};
