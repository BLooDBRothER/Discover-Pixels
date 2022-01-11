import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';

const dropdownItems = [
    {
        id: 1,
        value: "Popular"
    },
    {
        id: 2,
        value: "Trending"
    }
]

const HomePhoto = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='home-photos'>
            <Dropdown 
             classValue="home-photos-dropdown"
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             items={dropdownItems}/>
        </div>
    )
}

export default HomePhoto;
