import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Dropdown from '../dropdown/Dropdown';
import useImageOrderQuery from './useImageOrderQuery';
import Images from './Images';

const dropdownItems = [
    {
        id: 1,
        value: "Popular"
    },
    {
        id: 2,
        value: "Latest"
    }
]

const HomePhoto = () => {
    // Media query
    const isLargeScreen = useMediaQuery({
        query: "(min-width: 1750px)",
    });
    const isMediumScreen = useMediaQuery({
        query: "(min-width: 1280px)",
    });
    const isSmallScreen = useMediaQuery({
        query: "(min-width: 880px)"
    });

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("popular")
    const [query, setQuery] = useState("popular");

 
    const imageData = useImageOrderQuery(query);

    useEffect(() => {
        console.log(dropdownValue);
        setQuery(dropdownValue.toLowerCase());
    }, [dropdownValue])

    return (
        <div className='home-photos'>
            <Dropdown 
             classValue="home-photos-dropdown"
             setSelectedValue={setDropdownValue}
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             items={dropdownItems}
             setQuery
             />
            <Images imageItems={imageData} containers={isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1} />
            
        </div>
    )
}

export default HomePhoto;
