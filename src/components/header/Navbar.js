import React, { useState } from 'react';
import { MdPhotoCameraBack, MdPhotoCameraFront } from 'react-icons/md';
import { RiMenu5Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const Navbar = () => {
    // Media query
    const toMinimizeNavbar = useMediaQuery({
        query: "(max-width: 550px)",
    });

    const [toShowNavbar, setToShowNavbar] = useState(false);
    
    const toggleNavbar = () => {
        setToShowNavbar(prev => !prev);
    }

    return (
        <>
        {(toMinimizeNavbar ? 
        <div className='responsive-nav'>
            <RiMenu5Fill className='menu-ic' onClick={toggleNavbar} />
            {toShowNavbar && <nav className='header-nav'>
                <NavLink to="/" className='header-link'><MdPhotoCameraBack className='header-link-ic'/> Photo</NavLink>
                <NavLink to="/video" className='header-link'><MdPhotoCameraFront className='header-link-ic'/>Video</NavLink>
            </nav>}
        </div> :
        <nav className='header-nav'>
            <NavLink to="/" className='header-link'><MdPhotoCameraBack className='header-link-ic'/> Photo</NavLink>
            <NavLink to="/video" className='header-link'><MdPhotoCameraFront className='header-link-ic'/>Video</NavLink>
        </nav> )}
        </>
    )
}

export default Navbar;

