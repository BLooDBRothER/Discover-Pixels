import React from 'react';
import SearchBarPhoto from './SearchBarPhoto';
import SearchFooter from './SearchFooter';

const SearchPhoto = () => {
   

    return (
        <div className='search search-backdrop'>
            <h1>Discover your Pixels Here !!!!</h1>
            <SearchBarPhoto />
            <SearchFooter />
        </div>
    )
}

export default SearchPhoto;
