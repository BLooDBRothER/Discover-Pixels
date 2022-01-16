import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Dropdown from '../dropdown/Dropdown';
import useImageOrderQuery from './useImageOrderQuery';
import Images from './Images';
import LastObjectContext from '../last_intersection_observer/LastObjectContext';


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

    // const [isOpen, setIsOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("popular");
    const [order, setOrder] = useState("popular");
    const [pageNumber, setPageNumber] = useState(1);

    const {imageData, hasMore} = useImageOrderQuery(order, pageNumber);
    // const imageData = imgData;

    useEffect(() => {
        setOrder(dropdownValue.toLowerCase());
    }, [dropdownValue]);

    return (
        <LastObjectContext hasMore={hasMore} setPageNumber={setPageNumber} >
            <div className='gallery gallery-photos'>
                <Dropdown 
                classValue="gallery-dropdown"
                setSelectedValue={setDropdownValue}
                items={dropdownItems}
                />
                <Images imageItems={imageData} containers={isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1} />
            </div>
        </LastObjectContext>
        
    )
}

export default HomePhoto;