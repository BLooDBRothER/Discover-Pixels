import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({isNavbarVisible}) => {
    return (
        <>
        <header className='header'>
            <h1 className='header-title'><span className="letter-color">P</span>ix<span className='letter-color'>D</span>iscovery</h1>
            {(isNavbarVisible && <Navbar />)}
        </header>
        <Outlet />
        </>
    )
}

export default Header;
