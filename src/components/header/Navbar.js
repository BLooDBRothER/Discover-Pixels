import React from 'react';
import { MdPhotoCameraBack, MdPhotoCameraFront } from 'react-icons/md';


const Navbar = () => {
    return (
        <nav className='header-nav'>
            <a href='hi' className='header-link'><MdPhotoCameraBack className='header-link-ic'/> Photo</a>
            <a href='hi' className='header-link'><MdPhotoCameraFront className='header-link-ic'/>Video</a>
        </nav>
    )
}

export default Navbar;
