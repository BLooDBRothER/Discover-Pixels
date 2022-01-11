import React from 'react';
import Navbar from './Navbar';

const Header = ({isNavbarVisible}) => {
    return (
        <header className='header'>
            <h1 className='header-title'>PixDiscovery</h1>
            {(isNavbarVisible && <Navbar />)}
        </header>
    )
}

export default Header;
