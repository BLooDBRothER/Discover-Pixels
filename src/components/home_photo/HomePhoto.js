import React, { useState, useEffect, useRef, useCallback } from 'react';
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

export const lastObjectContext = React.createContext(null);

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

    const observer = useRef();
    const lastImageRef = useCallback((node) => {
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
            rootMargin: "200px"
        });
        observer.current.observe(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 

    useEffect(() => {
        setOrder(dropdownValue.toLowerCase());
    }, [dropdownValue]);

    return (
        <lastObjectContext.Provider value={lastImageRef}>
            <div className='home home-photos'>
                <Dropdown 
                classValue="home-dropdown"
                setSelectedValue={setDropdownValue}
                items={dropdownItems}
                />
                <Images imageItems={imageData} containers={isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1} />
            </div>
        </lastObjectContext.Provider>
    )
}

export default HomePhoto;
