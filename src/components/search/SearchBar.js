/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import SearchBarPhoto from '../home_search/SearchBarPhoto';
import CheckBox from './CheckBox';
import { categoryDropdownItems, imageTypeDropdownItems, orderDropdownItems, orientationDropdownItems } from './dropdown_items';

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
    let params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    let [imageTypeId, oreintationId, categoryId, orderId] = getSearchParamsId(searchParams.entries());
    
    const [searchBarValue, setSearchBarValue] = useState(params.searchKey);

    const updateLocalStorage = () => {
        console.log(isEditorChoiceEnabled, isSafeSearchEnabled)
        localStorage.setItem("safeSearch", isSafeSearchEnabled);
        localStorage.setItem("editorChoice", isEditorChoiceEnabled);
    }

    useEffect(() => {
        console.log(params);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        updateLocalStorage();
        console.log(imageTypeId, oreintationId, categoryId, orderId);
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
                <Dropdown 
                    classValue="search-result-dropdown"
                    setSelectedValue={setImageType}
                    defaultVaueId={imageTypeId}
                    items={imageTypeDropdownItems}
                />
                <Dropdown 
                    classValue="search-result-dropdown"
                    setSelectedValue={setOrientation}
                    defaultVaueId={oreintationId}
                    items={orientationDropdownItems}
                />
                <Dropdown 
                    classValue="search-result-dropdown"
                    setSelectedValue={setCategory}
                    defaultVaueId={categoryId}
                    items={categoryDropdownItems}
                />
                <Dropdown 
                    classValue="search-result-dropdown"
                    setSelectedValue={setOrder}
                    defaultVaueId={orderId}
                    items={orderDropdownItems}
                />
            </div>
        </div>
    )
}

export default SearchBar;
