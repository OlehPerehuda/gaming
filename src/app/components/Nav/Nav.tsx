
import logo from '@static/images/nav/logo.svg';

import './Nav.scss';

export const Nav = () =>
    <nav className="nav">
        <img
            className="nav__logo"
            src={logo}
            alt="logo"
        />
    </nav>;

