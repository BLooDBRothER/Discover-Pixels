/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import SearchBarPhoto from '../home_search/SearchBarPhoto';
import CheckBox from '../checkbox/CheckBox';
import { categoryDropdownItems, imageTypeDropdownItems, orderDropdownItems, orientationDropdownItems } from './dropdown_items';
import { QueryChangeContext } from '../../App';

function getSearchParamsId(entries){    
    let imgId=0, orienId=0, cateId=0, ordId=0;
    for(const entry of entries){
        switch(entry[0]){
            case "image_type":
                imgId = imageTypeDropdownItems.findIndex(item => item.value.toLowerCase() === entry[1]);
                break;
            case "orientation":
                orienId = orientationDropdownItems.findIndex(item => item.value.toLowerCase() === entry[1]);
                break;
            case "category":
                cateId = categoryDropdownItems.findIndex(item => item.value.toLowerCase() === entry[1]);
                break;
            default:
                ordId = orderDropdownItems.findIndex(item => item.value.toLowerCase() === entry[1]);
        }
    } 
    return [imgId, orienId, cateId, ordId];
}

const SearchBar = ({
    isSafeSearchEnabled,
    setIsSafeSearchEnabled,
    isEditorChoiceEnabled,
    setIsEditorChoiceEnabled,
    setImageType,
    setOrientation,
    setCategory,
    setOrder
    }) => {
        
    const paramsKeyValue = {
        image_type: {
            key: "image_type",
            default: "images"
        },
        orientation: {
            key: "orientation",
            default: "orientation"
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
    const [imageTypeId, setImageTypeId] = useState(0);
    const [oreintationId, setOreintationId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [orderId, setOrderId] = useState(0);
    
    const [searchBarValue, setSearchBarValue] = useState(params.searchKey);

    const updateLocalStorage = () => {
        localStorage.setItem("safeSearch", isSafeSearchEnabled);
        localStorage.setItem("editorChoice", isEditorChoiceEnabled);
    }

    useEffect(() => {
        setSearchBarValue(params.searchKey);
    }, [params]);

    useEffect(() => {
        // console.log(params);
        const [imageTypeId, oreintationId, categoryId, orderId] = getSearchParamsId(searchParams.entries());
        setImageTypeId(imageTypeId);
        setOreintationId(oreintationId);
        setCategoryId(categoryId);
        setOrderId(orderId);
        // console.log(imageTypeId, oreintationId, categoryId, orderId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    useEffect(() => {
        updateLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSafeSearchEnabled, isEditorChoiceEnabled]);

    return (
        <div className='search-result'>
            <div className='search-result-1'>
                <SearchBarPhoto classValue="search-result-bar" searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
                <div className='search-result-checkbox'>
                    <CheckBox value="Safe Search" checkboxStatue={isSafeSearchEnabled} setCheckedStatus={setIsSafeSearchEnabled} />
                    <CheckBox value="Editor's Choice" checkboxStatue={isEditorChoiceEnabled} setCheckedStatus={setIsEditorChoiceEnabled} />
                </div>
            </div>
            <div className='search-result-2'>
                <QueryChangeContext.Provider value={paramsKeyValue.image_type}>
                    <Dropdown 
                        classValue="search-result-dropdown"
                        setSelectedValue={setImageType}
                        defaultVaueId={imageTypeId}
                        items={imageTypeDropdownItems}
                    />
                </QueryChangeContext.Provider>
                <QueryChangeContext.Provider value={paramsKeyValue.orientation}>
                    <Dropdown 
                        classValue="search-result-dropdown"
                        setSelectedValue={setOrientation}
                        defaultVaueId={oreintationId}
                        items={orientationDropdownItems}
                    />
                </QueryChangeContext.Provider>
                <QueryChangeContext.Provider value={paramsKeyValue.category}>
                    <Dropdown 
                        classValue="search-result-dropdown"
                        setSelectedValue={setCategory}
                        defaultVaueId={categoryId}
                        items={categoryDropdownItems}
                    />
                </QueryChangeContext.Provider>
                <QueryChangeContext.Provider value={paramsKeyValue.order}>
                    <Dropdown 
                        classValue="search-result-dropdown"
                        setSelectedValue={setOrder}
                        defaultVaueId={orderId}
                        items={orderDropdownItems}
                    />
                </QueryChangeContext.Provider>
            </div>
        </div>
    )
}

export default SearchBar;
