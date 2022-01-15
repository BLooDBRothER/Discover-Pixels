import React, { useEffect } from 'react';
import SearchBarPhoto from './SearchBarPhoto';
import SearchFooter from './SearchFooter';

const SearchPhoto = ({setIsNavbarVisible}) => {
   useEffect(() => {
    setIsNavbarVisible(false);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

    return (
        <div className='search search-backdrop'>
            <h1>Discover your Pixels Here !!!!</h1>
            <SearchBarPhoto classValue="home-search" />
            <SearchFooter />
        </div>
    )
}

export default SearchPhoto;
