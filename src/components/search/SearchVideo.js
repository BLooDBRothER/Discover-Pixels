import React from 'react';
import SearchBarVideo from './SearchBarVideo';
import SearchFooter from './SearchFooter';
import video_bg from '../../Assets/bg_video.mp4';

const SearchVideo = () => {
   

    return (
        <div className='search'>
            <video className='search--backdrop-video' muted loop="loop" autoPlay="autoplay">
                <source src={video_bg} type='video/mp4' />
            </video>
            <h1 className='search--video-title'>Discover your Changing Pixels Here !!!!</h1>
            <SearchBarVideo />
            <SearchFooter />
        </div>
    )
}

export default SearchVideo;
