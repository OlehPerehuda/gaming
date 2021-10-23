import rocket from '../../static/images/auth/rocket.png';
import logo from '../../static/images/auth/logo.png';
import './styles.scss';

export const AuthLayout: React.FC = ({ children }) => {
    return (
        <div className='auth'>
            <div className='auth__leftbar'>
                <img src={logo} alt='Logo' className='auth__logo' />
                <img src={rocket} alt='Rocket' className="auth__rocket" />
                <div>
                    <h5>
                        Buy,
                        <br /> Play,
                        <br /> Left Review!
                        <br />
                    </h5>
                </div>
            </div>
            <div className='auth__content'>{children}</div>
        </div>
    );
};
