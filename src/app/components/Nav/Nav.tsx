
import logo from '@static/images/nav/logo.svg';
import medium from '@static/images/nav/medium.svg';
import twitter from '@static/images/nav/twitter.svg';
import telegram from '@static/images/nav/telegram.svg';
import discord from '@static/images/nav/discord.svg';
import { Cross, DropdownNavBar } from '@static/images/nav/svg';


import './Nav.scss';
import { useState } from 'react';


export const Nav = () =>{
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
    const list = [
        {
            icon: telegram,
            path: "#"
        },
        {
            icon: twitter,
            path: "#"
        },
        {
            icon: medium,
            path: "#"
        },
        {
            icon: discord,
            path: "#"
        },
    ]
    return(
        <nav className="nav">
            <img
                className="nav__logo"
                src={logo}
                alt="logo"
            />
            <div className="nav__controls">
            <ul
                    className="nav__list"
                >
                    {list.map((item, index) =>
                        <li className="nav__item" key={index}>
                            <a
                                href={item.path}
                                className="nav__link"
                            >
                                <img className="nav__icon" src={item.icon} alt="" />
                            </a>
                        </li>

                    )}
                </ul>
                <a href="" className="nav__button">
                    Login
                </a>
                <a href="" className="nav__button">
                    Register
                </a>
            </div>
            <div className={`nav__controls-mobile${dropdownMenu ? '-active' : ''}`}>
            <ul
                    className="nav__list-mobile"
                >
                    {list.map((item, index) =>
                        <li className="nav__item" key={index}>
                            <a
                                href={item.path}
                                className="nav__link"
                            >
                                <img className="nav__icon" src={item.icon} alt="" />
                            </a>
                        </li>

                    )}
                </ul>
                <a href="" className="nav__button-mobile">
                    Login
                </a>
                <a href="" className="nav__button-mobile">
                    Register
                </a>
            </div>
                <div
                    className="nav__dropdown"
                    onClick={() => setDropdownMenu(!dropdownMenu)}
                >
                    {dropdownMenu ? <Cross /> : <DropdownNavBar />}
                </div>
        </nav>
    )
}
