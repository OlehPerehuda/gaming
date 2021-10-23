import logo from '../../static/images/nav//logo.png';

import './Nav.scss';

export const Nav = () => (
    <nav className='nav'>
        <img className='nav__logo' src={logo} alt='logo' />
    </nav>
);
