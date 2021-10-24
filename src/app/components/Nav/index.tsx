import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../static/images/nav/logo.png';
import { Cross, DropdownNavBar } from '../../static/images/nav/svg';
import { logoutUser } from '../../store/actions/user';
import { ERoutes } from '../../../routes';
import { RootState } from '../../store';
import './index.scss';
import { SocialList } from './consts';

export const Nav = () => {
    const dispatch = useDispatch();
    const { email, firstName, lastName } = useSelector(
        (state: RootState) => state.user
    );
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav className='nav'>
            <img className='nav__logo' src={logo} alt='logo' />
            <div className='nav__controls'>
                <ul className='nav__list'>
                    {SocialList.map((item, index) => (
                        <li className='nav__item' key={index}>
                            <a href={item.path} className='nav__link'>
                                <img
                                    className='nav__icon'
                                    src={item.icon}
                                    alt=''
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                {!email ? (
                    <>
                        <Link to={ERoutes.login} className='nav__button'>
                            Login
                        </Link>
                        <Link to={ERoutes.registration} className='nav__button'>
                            Register
                        </Link>
                    </>
                ) : (
                    <div>
                        <span>
                            Welcome, {lastName} {firstName}
                        </span>
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
            <div
                className={`nav__controls-mobile${
                    dropdownMenu ? '-active' : ''
                }`}
            >
                <ul className='nav__list-mobile'>
                    {SocialList.map((item, index) => (
                        <li className='nav__item' key={index}>
                            <a href={item.path} className='nav__link'>
                                <img
                                    className='nav__icon'
                                    src={item.icon}
                                    alt=''
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <a href='' className='nav__button-mobile'>
                    Login
                </a>
                <a href='' className='nav__button-mobile'>
                    Register
                </a>
            </div>
            <div
                className='nav__dropdown'
                onClick={() => setDropdownMenu(!dropdownMenu)}
            >
                {dropdownMenu ? <Cross /> : <DropdownNavBar />}
            </div>
        </nav>
    );
};
