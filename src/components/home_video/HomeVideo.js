import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Dropdown from '../dropdown/Dropdown';
import Videos from '../Video/Videos';
import useVideoOrderQuery from './useVideoOrderQuery';

export const lastVideoObjectContext = React.createContext(null);

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

    const observer = useRef();
    const lastVideoRef = useCallback((node) => {
        console.log(node);
        if(!node) return;
        if(!hasMore) {observer.current?.disconnect(); return;}
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setPageNumber(prevPage => prevPage+1);
                observer.current.disconnect();
            }
        },{
            threshold: 1,
            rootMargin: "300px"
        });
        observer.current.observe(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 

    useEffect(() => {
        setOrder(dropdownValue.toLowerCase());
    }, [dropdownValue]);

    return (
        <lastVideoObjectContext.Provider value={lastVideoRef}>
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
        </lastVideoObjectContext.Provider>
    )
}

export default HomeVideo;
