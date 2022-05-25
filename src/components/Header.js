import React from 'react';
import "./componentCss.css";
function Header() {
    return (
        <header>
            <nav className='nav'>
                <img src="./logo192.png" alt="My Logo " className='nav-logo'/>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;