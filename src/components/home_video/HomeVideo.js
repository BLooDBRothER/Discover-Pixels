import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Dropdown from '../dropdown/Dropdown';
import Videos from '../Video/Videos';
import { data } from './samplevideo';
import useVideoOrderQuery from './useVideoOrderQuery';

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

const HomeVideo = () => {
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
    const [dropdownValue, setDropdownValue] = useState("popular");
    const [order, setOrder] = useState("popular");
    const [pageNumber, setPageNumber] = useState(1);

    const {videoData, hasMore} = useVideoOrderQuery(order, pageNumber);
    // const videoData = data;

    return (
        <div className='home home-videos'>
            <Dropdown 
             classValue="home-dropdown"
             setSelectedValue={setDropdownValue}
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             items={dropdownItems}
             />
             <Videos
              videoItems={videoData}
              containers={isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1}
            />
        </div>
    )
}

export default HomeVideo;
