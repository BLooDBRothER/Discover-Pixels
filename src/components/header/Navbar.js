import React from 'react';
import { MdPhotoCameraBack, MdPhotoCameraFront } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='header-nav'>
            <NavLink to="/" className='header-link'><MdPhotoCameraBack className='header-link-ic'/> Photo</NavLink>
            <NavLink to="/video" className='header-link'><MdPhotoCameraFront className='header-link-ic'/>Video</NavLink>
        </nav>
    )
}

export default Navbar;
