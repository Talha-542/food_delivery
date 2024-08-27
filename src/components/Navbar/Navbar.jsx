import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fontawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

export default function Navbar() {
    const [menu, setMenu] = useState("home");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    return (
        <div className='navbar'>
            <h1 className='logo-text'>Food Inc.</h1>
            <ul className="navbar-menu">
                <li
                    className={menu === 'home' ? 'active' : ''}
                    onClick={() => handleMenuClick('home')}
                >
                    Home
                </li>
                <li
                    className={menu === 'menu' ? 'active' : ''}
                    onClick={() => handleMenuClick('menu')}
                >
                    Menu
                </li>
                <li
                    className={menu === 'mobile App' ? 'active' : ''}
                    onClick={() => handleMenuClick('mobile App')}
                >
                    Mobile App
                </li>
                <li
                    className={menu === 'contact Us' ? 'active' : ''}
                    onClick={() => handleMenuClick('contact Us')}
                >
                    Contact Us
                </li>
            </ul>
            <div className="navbar-right">
                <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
                <div className="navbar-search-icon">
                    <Link className="nav-cart" to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                    <div className="dot"></div>
                </div>
                <button onClick={() => console.log('Sign In Clicked')}>Sign In</button>
            </div>
        </div>
    );
}
