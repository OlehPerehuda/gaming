import rocket from '../../static/images/rocket.png';
import logo from '../../static/images/nav/logo.png';
import './styles.scss';

export const AuthLayout: React.FC = ({ children }) => {
    return (
        <div className='auth__wrapper'>
            <div className='auth_leftbar'>
                <img src={logo} alt='Logo' className='auth__logo' />
                <img src={rocket} alt='Rocket' />
                <div>
                    <h5>
                        Buy,
                        <br /> Play,
                        <br /> Left Review!
                        <br />
                    </h5>
                </div>
            </div>
            <div className='auth_content'>{children}</div>
        </div>
    );
};
