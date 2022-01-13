import React from 'react';
import { FaEye, FaHeart, FaCommentAlt } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const VideoMetadata = ({viewCount, likes, downloads, commentCount}) => {
    return (
        <div className='video-metadata'>
            <div className='video-metadata--views'>
                <FaEye className='video-metadata--ic video-metadata--views-ic views-ic'/>
                <h5>{viewCount}</h5>
            </div>
            <div className='video-metadata--likes'>
                <FaHeart className='video-metadata--ic video-metadata--likes-ic likes-ic'/>
                <h5>{likes}</h5>
            </div>
            <div className='video-metadata--downloads'>
                <HiDownload className='video-metadata--ic video-metadata--downloads-ic downloads-ic'/>
                <h5>{downloads}</h5>
            </div>
            <div className='video-metadata--comments'>
                <FaCommentAlt className='video-metadata--ic video-metadata--comments-ic comments-ic'/>
                <h5>{commentCount}</h5>
            </div>
        </div>
    )
}

export default VideoMetadata;
