import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, useSearchParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Videos from '../Video/Videos';
import LastObjectContext from '../last_intersection_observer/LastObjectContext';
import { FilterChangeContext } from '../../App';
import useVideoGet from '../custom_hooks/useVideoGet';
import SearchVideoBar from './SearchVideoBar';


const SearchVideoPage = ({setIsNavbarVisible}) => {
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
    const safeSearchLocalStorage = localStorage.getItem("safeSearch") === "false" ? false : true;
    const editorChoiceLocalStorage = localStorage.getItem("editorChoice") === "true" ? true : false;

    const [isSafeSearchEnabled, setIsSafeSearchEnabled] = useState(safeSearchLocalStorage);
    const [isEditorChoiceEnabled, setIsEditorChoiceEnabled] = useState(editorChoiceLocalStorage);
    const [query, setQuery] = useState(params.searchKey);
    const [videoType, setVideoType] = useState(searchParams.get("video_type") || "images");
    const [orientation, setOrientation] = useState(searchParams.get("orientation") || "orientation");
    const [category, setCategory] = useState(searchParams.get("category") || "category");
    const [order, setOrder] = useState(searchParams.get("order") || "popular");
    const [pageNumber, setPageNumber] = useState(1);

    let {videoData, hasMore} = useVideoGet(query, videoType, order, orientation, category, isSafeSearchEnabled, isEditorChoiceEnabled, pageNumber);
    console.log(videoData);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        searchParams.has("video_type") ? setVideoType(searchParams.get("video_type")) : setVideoType("images");
        console.log(searchParams.has("category"));
        searchParams.has("category") ? setCategory(searchParams.get("category")) : setCategory("category");
        searchParams.has("order") ? setOrder(searchParams.get("order")) : setOrder("popular");
    }, [searchParams]);

    return (
        <>
            <FilterChangeContext.Provider value={handleFilterChange}>
                <SearchVideoBar 
                    isSafeSearchEnabled={isSafeSearchEnabled}
                    setIsSafeSearchEnabled={setIsSafeSearchEnabled}
                    isEditorChoiceEnabled={isEditorChoiceEnabled}
                    setIsEditorChoiceEnabled={setIsEditorChoiceEnabled}
                    setVideoType={setVideoType}
                    setOrientation={setOrientation}
                    setCategory={setCategory}
                    setOrder={setOrder}
                />
            </FilterChangeContext.Provider>
            <LastObjectContext hasMore={hasMore} setPageNumber={setPageNumber} >
            {((videoData.length !== 0) && <div className='gallery gallery-photos'>
                <Videos
                videoItems={videoData}
                containers={isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1}
                />
            </div>)}
            <ReactLoading type="bars" style={{margin: "0 auto", height: "100px", width: "100px", fill: "white"}}/>
        </LastObjectContext>
        </>
    )
}

export default SearchVideoPage
