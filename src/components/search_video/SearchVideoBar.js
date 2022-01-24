/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import SearchBarVideo from '../home_search/SearchBarVideo';
import { videoTypeDropdownItems, categoryDropdownItems, orderDropdownItems } from '../search_photo/dropdown_items';
import CheckBox from '../checkbox/CheckBox';
import { QueryChangeContext } from '../../App';
import ClearFilter from '../clearFilter/ClearFilter';

function getSearchParamsId(entries){    
    let imgId=0, cateId=0, ordId=0;
    for(const entry of entries){
        switch(entry[0]){
            case "video_type":
                imgId = videoTypeDropdownItems.findIndex(item => item.value.toLowerCase() === entry[1]);
                break;
            case "category":
                cateId = categoryDropdownItems.findIndex(item => item.value.toLowerCase() === entry[1]);
                break;
            default:
                ordId = orderDropdownItems.findIndex(item => item.value.toLowerCase() === entry[1]);
        }
    } 
    return [imgId, cateId, ordId];
}

const SearchVideoBar = ({
    isSafeSearchEnabled,
    setIsSafeSearchEnabled,
    isEditorChoiceEnabled,
    setIsEditorChoiceEnabled,
    setVideoType,
    setCategory,
    setOrder
    }) => {
        
    const paramsKeyValue = {
        image_type: {
            key: "video_type",
            default: "videos"
        },
        category: {
            key: "category",
            default: "category"
        },
        order: {
            key: "order",
            default: "popular"
        }
    }
    let params = useParams();
    const [searchParams] = useSearchParams();
    const [videoTypeId, setVideoTypeId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [orderId, setOrderId] = useState(0);
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);
    
    const [searchBarValue, setSearchBarValue] = useState(params.searchKey);

    const observer = useRef();
    const setIntersection = useCallback((node) => {
        if(!node) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entry) => {
            if(entry[0].intersectionRatio === 0){
                setIsSearchbarVisible(true);
            }
            else{
                setIsSearchbarVisible(false);
            }
        })
        observer.current.observe(node);
    });

    useEffect(() => {
        return () => {observer.current?.disconnect()}
    }, []);

    const updateLocalStorage = () => {
        localStorage.setItem("safeSearch", isSafeSearchEnabled);
        localStorage.setItem("editorChoice", isEditorChoiceEnabled);
    }

    useEffect(() => {
        setSearchBarValue(params.searchKey);
    }, [params]);

    useEffect(() => {
        const [videoId, categoryId, orderId] = getSearchParamsId(searchParams.entries());
        setVideoTypeId(videoId);
        setCategoryId(categoryId);
        setOrderId(orderId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    useEffect(() => {
        updateLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSafeSearchEnabled, isEditorChoiceEnabled]);

    return (
        <>
        {isSearchbarVisible && <SearchBarVideo classValue="search-result-fixed-bar" searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />}
        <div className='search-result' ref={setIntersection}>
            <div className='search-result-1'>
                <SearchBarVideo classValue="search-result-bar" searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
                <div className='search-result-checkbox'>
                    <CheckBox value="Safe Search" checkboxStatue={isSafeSearchEnabled} setCheckedStatus={setIsSafeSearchEnabled} />
                    <CheckBox value="Editor's Choice" checkboxStatue={isEditorChoiceEnabled} setCheckedStatus={setIsEditorChoiceEnabled} />
                </div>
            </div>
            <div className='search-result-2'>
                <QueryChangeContext.Provider value={paramsKeyValue.image_type}>
                    <Dropdown 
                        classValue="search-result-dropdown"
                        setSelectedValue={setVideoType}
                        defaultVaueId={videoTypeId}
                        items={videoTypeDropdownItems}
                        triggerClose={isSearchbarVisible}
                    />
                </QueryChangeContext.Provider>
                <QueryChangeContext.Provider value={paramsKeyValue.category}>
                    <Dropdown 
                        classValue="search-result-dropdown"
                        setSelectedValue={setCategory}
                        defaultVaueId={categoryId}
                        items={categoryDropdownItems}
                        triggerClose={isSearchbarVisible}
                    />
                </QueryChangeContext.Provider>
                <QueryChangeContext.Provider value={paramsKeyValue.order}>
                    <Dropdown 
                        classValue="search-result-dropdown"
                        setSelectedValue={setOrder}
                        defaultVaueId={orderId}
                        items={orderDropdownItems}
                        triggerClose={isSearchbarVisible}
                    />
                </QueryChangeContext.Provider>
                <ClearFilter triggerClose={isSearchbarVisible} />
            </div>
        </div>
        </>
    )
}

export default SearchVideoBar;
