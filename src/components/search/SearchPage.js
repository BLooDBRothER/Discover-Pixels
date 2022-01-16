import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, useSearchParams } from 'react-router-dom';
import useImageGet from '../custom_hooks/useImageGet';
import Images from '../home_photo/Images';
import LastObjectContext from '../last_intersection_observer/LastObjectContext';
import SearchBar from './SearchBar';

export const FilterChangeContext = React.createContext(null);

const SearchPage = ({setIsNavbarVisible}) => {
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

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    // params variable
    const safeSearchLocalStorage = localStorage.getItem("safeSearch") === "true" ? true : false;
    const editorChoiceLocalStorage = localStorage.getItem("editorChoice") === "true" ? true : false;

    const [isSafeSearchEnabled, setIsSafeSearchEnabled] = useState(safeSearchLocalStorage);
    const [isEditorChoiceEnabled, setIsEditorChoiceEnabled] = useState(editorChoiceLocalStorage);
    const [query, setQuery] = useState(params.searchKey);
    const [imageType, setImageType] = useState(searchParams.get("image_type") || "images");
    const [orientation, setOrientation] = useState(searchParams.get("orientation") || "orientation");
    const [category, setCategory] = useState(searchParams.get("category") || "category");
    const [order, setOrder] = useState(searchParams.get("order") || "popular");
    const [pageNumber, setPageNumber] = useState(1);

    let {imageData, hasMore} = useImageGet(query, imageType, order, orientation, category, isSafeSearchEnabled, isEditorChoiceEnabled, pageNumber);

    const handleFilterChange = (key, value, defaultValue) => {
        let queryParams = {}
        if(value !== defaultValue){
            queryParams[key] = value;
        }
        for(const entry of searchParams.entries()){
            if(entry[0] === key) continue;
            queryParams[entry[0]] = entry[1];
        }
        setSearchParams(queryParams);
    }

    useEffect(() => {
        setQuery(params.searchKey);
    }, [params]);

    useEffect(() => {
        setIsNavbarVisible(true);
        // console.log(params, searchParams, searchParams.get("imag_type"));
        // for(let entry of searchParams.entries()){
        //     console.log(entry);
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {console.log("chg", imageType)}, [imageType]);
    // useEffect(() => {console.log("chg", orientation)}, [orientation]);
    // useEffect(() => {console.log("chg", category)}, [category]);
    // useEffect(() => {console.log("chg", order)}, [order]);

    useEffect(() => {
        // console.log(searchParams);
        searchParams.has("image_type") ? setImageType(searchParams.get("image_type")) : setImageType("images");
        searchParams.has("orientation") ? setOrientation(searchParams.get("orientation")) : setOrientation("orientation");
        searchParams.has("category") ? setCategory(searchParams.get("category")) : setCategory("category");
        searchParams.has("order") ? setOrder(searchParams.get("order")) : setOrder("popular");
    }, [searchParams]);

    return (
        <>
            <FilterChangeContext.Provider value={handleFilterChange}>
                <SearchBar 
                    isSafeSearchEnabled={isSafeSearchEnabled}
                    setIsSafeSearchEnabled={setIsSafeSearchEnabled}
                    isEditorChoiceEnabled={isEditorChoiceEnabled}
                    setIsEditorChoiceEnabled={setIsEditorChoiceEnabled}
                    setImageType={setImageType}
                    setOrientation={setOrientation}
                    setCategory={setCategory}
                    setOrder={setOrder}
                />
            </FilterChangeContext.Provider>
            <LastObjectContext hasMore={hasMore} setPageNumber={setPageNumber} >
            <div className='gallery gallery-photos'>
                <Images imageItems={imageData} containers={isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1} />
            </div>
        </LastObjectContext>
        </>
    )
}

export default SearchPage;
