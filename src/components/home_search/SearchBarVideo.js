import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';

const dropDownItems = [
    {
        id: 1,
        value: "All"
    },
    {
        id: 2,
        value: "Film"
    },
    {
        id: 3,
        value: "Animation"
    },
]

const SearchBarVideo = ({classValue, searchBarValue, setSearchBarValue}) => {
    const [dropdownValue, setDropdownValue] = useState("All");
    const [searchParams] = useSearchParams();
    const params = useParams();
    const navigate = useNavigate();

    const returnSearchParams = () => {
        const searchParamList = [];
        if(dropdownValue.toLowerCase() !== "all") searchParamList.push(`video_type=${dropdownValue}`)
        for(const entry of searchParams.entries()){
            if(entry[0] === "video_type") continue;
            searchParamList.push(`${entry[0]}=${entry[1]}`);
        }
        return searchParamList.length === 0 ? "" : searchParamList.join("&");
    }

    const triggerSearch = (e) => {
        if((e._reactName === "onKeyPress" && e.code !== "Enter") || searchBarValue === "") return;
        e.preventDefault();
        if(params.searchKey === searchBarValue) return;
        const getSearchParams = returnSearchParams();
        const searchParamsString = getSearchParams === "" ? "" : `?${getSearchParams}`;
        navigate(`/search/video/${searchBarValue}${searchParamsString}`);
    }

    return (
        <form className={`search-form ${classValue}`}>
            <div className='search-input'>
                <input type="text" placeholder='Search Videos powered By pixabay' className='search-input-value' value={searchBarValue} onChange={(e) => {setSearchBarValue(e.target.value)}} className='search-input-value' onKeyPress={triggerSearch}  />
                <FaSearch className='search-input-ic'/>
            </div>
            <Dropdown
             classValue="search-dropdown"
             setSelectedValue={setDropdownValue}
             items={dropDownItems}
             enableHoverEffect={true}
            />
        </form>
    )
}

export default SearchBarVideo;
