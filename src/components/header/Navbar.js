import React, { useState } from 'react';
import { MdPhotoCameraBack, MdPhotoCameraFront } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { RiMenu5Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const Navbar = () => {
    // Media query
    const toMinimizeNavbar = useMediaQuery({
        query: "(max-width: 600px)",
    });

    const [toShowNavbar, setToShowNavbar] = useState(false);
    
    const toggleNavbar = () => {
        setToShowNavbar(prev => !prev);
    }

    const closeNavbar = () => {
        setToShowNavbar(false);
    }

    return (
        <>
        {(toMinimizeNavbar ? 
        <div className='responsive-nav'>
            <RiMenu5Fill className='menu-ic' onClick={toggleNavbar} />
            {toShowNavbar && <nav className='header-nav'>
                <NavLink to="/" className='header-link' onClick={closeNavbar}><MdPhotoCameraBack className='header-link-ic' /> Photo</NavLink>
                <NavLink to="/video" className='header-link' onClick={closeNavbar}><MdPhotoCameraFront className='header-link-ic' />Video</NavLink>
                <NavLink to="/credit" className='header-link' onClick={closeNavbar}><FcAbout className='header-link-ic credit--link-ic'/>Credit</NavLink>
            </nav>}
        </div> :
        <nav className='header-nav'>
            <NavLink to="/" className='header-link'><MdPhotoCameraBack className='header-link-ic'/> Photo</NavLink>
            <NavLink to="/video" className='header-link'><MdPhotoCameraFront className='header-link-ic'/>Video</NavLink>
            <NavLink to="/credit" className='header-link'><FcAbout className='header-link-ic credit--link-ic'/>Credit</NavLink>
        </nav> )}
        </>
    )
}

export default Navbar;

