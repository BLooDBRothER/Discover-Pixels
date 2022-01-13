import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({isNavbarVisible}) => {
    return (
        <>
        <header className='header'>
            <h1 className='header-title'>PixDiscovery</h1>
            {(isNavbarVisible && <Navbar />)}
        </header>
        <Outlet />
        </>
    )
}

export default Header;
