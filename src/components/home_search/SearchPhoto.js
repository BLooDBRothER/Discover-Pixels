import React, { useEffect, useState } from 'react';
import SearchBarPhoto from './SearchBarPhoto';
import SearchFooter from './SearchFooter';

const SearchPhoto = ({setIsNavbarVisible}) => {
   const [searchBarValue, setSearchBarValue] = useState("");

   useEffect(() => {
    setIsNavbarVisible(false);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

    return (
        <div className='search search-backdrop'>
            <h1>Discover your Pixels Here !!!!</h1>
            <SearchBarPhoto classValue="home-search" searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
            <SearchFooter />
        </div>
    )
}

export default SearchPhoto;
