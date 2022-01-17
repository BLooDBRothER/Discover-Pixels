import React, { useEffect, useState } from 'react';
import SearchBarVideo from './SearchBarVideo';
import SearchFooter from './SearchFooter';
import video_bg from '../../Assets/bg_video.mp4';

const SearchVideo = ({setIsNavbarVisible}) => {
   const [searchBarValue, setSearchBarValue] = useState("");
    useEffect(() => {
        setIsNavbarVisible(false);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='search'>
            <video className='search--backdrop-video' muted loop="loop" autoPlay="autoplay">
                <source src={video_bg} type='video/mp4' />
            </video>
            <h1 className='search--video-title'>Discover your Changing Pixels Here !!!!</h1>
            <SearchBarVideo classValue="home-search" searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
            <SearchFooter />
        </div>
    )
}

export default SearchVideo;
