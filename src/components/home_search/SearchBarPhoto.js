import React, { useRef, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Dropdown from '../dropdown/Dropdown';

const dropDownItems = [
    {
        id: 1,
        value: "All"
    },
    {
        id: 2,
        value: "Photo"
    },
    {
        id: 3,
        value: "Illustration"
    },
    {
        id: 4,
        value: "Vector"
    },
]

const SearchBarPhoto = ({classValue, searchBarValue, setSearchBarValue}) => {
    const [dropdownValue, setDropdownValue] = useState("All");

    const triggerSearch = (e) => {
        console.log(e);
        if((e._reactName === "onKeyPress" && e.code !== "Enter") || searchBarValue === "") return;
        e.preventDefault();
        window.location = `/search/image/${searchBarValue}`;
    }

    return (
        <form className={`search-form ${classValue}`}>
            <div className='search-input'>
                <input type="text" placeholder='Search Images powered By pixabay' value={searchBarValue} onChange={(e) => {setSearchBarValue(e.target.value)}} className='search-input-value' onKeyPress={triggerSearch} />
                <FaSearch className='search-input-ic' onClick={triggerSearch}/>
            </div>
            <Dropdown
             classValue="search-dropdown"
             setSelectedValue={setDropdownValue}
             items={dropDownItems}
             enableHoverEffect={true}
            />
        </form>
    )
}

export default SearchBarPhoto;
