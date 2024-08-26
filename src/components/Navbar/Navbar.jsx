import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

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
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket" />
                    <div className="dot"></div>
                </div>
                <button onClick={() => console.log('Sign In Clicked')}>Sign In</button>
            </div>
        </div>
    );
}
