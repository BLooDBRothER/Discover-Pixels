import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchFooter = () => {
    return (
        <div className='search-footer'>
            <NavLink to="/" className='search-footer-link'>Photo</NavLink>
            <NavLink to="/video" className='search-footer-link'>Video</NavLink>
        </div>
    )
}

export default SearchFooter;
