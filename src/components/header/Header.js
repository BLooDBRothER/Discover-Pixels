import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { FcAbout } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Header = ({isNavbarVisible}) => {
    return (
        <>
        <header className='header'>
            <h1 className='header-title'><span className="letter-color">P</span>ix<span className='letter-color'>D</span>iscovery</h1>
            {(isNavbarVisible && <Navbar />)}
            {(!isNavbarVisible && <nav className='header-nav'>
                                    <NavLink to="/credit" className='header-link'><FcAbout className='header-link-ic credit--link-ic'/>Credit</NavLink>
                                 </nav>)}
        </header>
        <Outlet />
        </>
    )
}

export default Header;
