import React from 'react';
import { Nav } from '../Nav';

import './Header.scss';

export const Header = () =>
    <header className="header">
        <div className="header__wrapper">
            <Nav/>
            <div className="header__text-area">
                <h1 className="header__title">
                    Upcoming IGOs__
                </h1>
                <p className="header__description">
                    Full-scale gaming ecosystem for IGOs and NFT pre-sales.
                </p>
            </div>
        </div>
    </header>
);
