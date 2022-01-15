import React, { useEffect, useState } from 'react';
import SearchBarPhoto from '../home_search/SearchBarPhoto';
import CheckBox from './CheckBox';

const SearchBar = ({setIsNavbarVisible}) => {
    const [isSafeSearchEnabled, setIsSafeSearchEnabled] = useState(false);
    const [isEditorChoiceEnabled, setIsEditorChoiceEnabled] = useState(false);

    const updateLocalStorage = () => {
        localStorage.setItem("safeSearch", isSafeSearchEnabled.toString());
        localStorage.setItem("editorChoice", isEditorChoiceEnabled.toString());
    }

    const getLocalStorage = () => {
        if(!localStorage.getItem("safeSearch") || !localStorage.getItem("editorChoice")){updateLocalStorage(); return;}
        localStorage.getItem("safeSearch") === "false" ? setIsSafeSearchEnabled(false) : setIsSafeSearchEnabled(true); 
        localStorage.getItem("editorChoice") === "false" ? setIsEditorChoiceEnabled(false) : setIsEditorChoiceEnabled(true); 
    }

    useEffect(() => {
        getLocalStorage();
        setIsNavbarVisible(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        updateLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSafeSearchEnabled, isEditorChoiceEnabled])

    return (
        <div className='search-result'>
            <SearchBarPhoto classValue="search-result-bar" />
            <div className='search-result-checkbox'>
                <CheckBox value="Safe Search" checkboxStatue={isSafeSearchEnabled} setCheckedStatus={setIsSafeSearchEnabled} />
                <CheckBox value="Editor's Choice" checkboxStatue={isEditorChoiceEnabled} setCheckedStatus={setIsEditorChoiceEnabled} />
            </div>
        </div>
    )
}

export default SearchBar;
