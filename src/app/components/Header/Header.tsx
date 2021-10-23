import React from 'react';
import { Nav } from '@components/Nav';

import './Header.scss';

export const Header = () =>
    <header className="header">
        <div className="header__wrapper">
            <Nav/>
        </div>
    </header>;

