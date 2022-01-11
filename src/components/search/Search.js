import React from 'react';
import SearchBar from './SearchBar';
import SearchFooter from './SearchFooter';

const Search = () => {
   

    return (
        <div className='search search-backdrop'>
            <h1>Discover your Pixels Here !!!!</h1>
            <SearchBar />
            <SearchFooter />
        </div>
    )
}

export default Search;
