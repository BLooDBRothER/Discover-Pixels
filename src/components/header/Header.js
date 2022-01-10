import React from 'react';
import { MdPhotoCameraBack, MdPhotoCameraFront } from 'react-icons/md';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-title'>PixDiscovery</h1>
            <nav className='header-nav none'>
                <a href='hi' className='header-link'><MdPhotoCameraBack className='header-link-ic'/> Photo</a>
                <a href='hi' className='header-link'><MdPhotoCameraFront className='header-link-ic'/>Video</a>
            </nav>
        </header>
    )
}

export default Header;
