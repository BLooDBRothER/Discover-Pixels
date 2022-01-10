import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Dropdown from '../dropdown/Dropdown';

const dropDownItems = [
    {
        id: 1,
        type: "All"
    },
    {
        id: 2,
        type: "Photo"
    },
    {
        id: 3,
        type: "Illustration"
    },
    {
        id: 4,
        type: "Vector"
    },
]

const SearchBar = () => {
    return (
        <form className='search-form'>
            <div className='search-input'>
                <input type="text" placeholder='Search Images powered By pixabay' className='search-input-value' />
                <FaSearch className='search-input-ic'/>
            </div>
            <Dropdown
             classValue="search-dropdown"
             items={dropDownItems}
            />
        </form>
    )
}

export default SearchBar;
