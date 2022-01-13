import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const VideoAuthor = ({authorName, authorPic}) => {
    return (
        <div className='video-author'>
            <h5 className='video-author--name'>{authorName}</h5>
            {(authorPic!=="" ? <img className='video-author--pic' src={authorPic} alt={authorName} /> : <FaUserAlt className='video-author--pic' />)}
        </div>
    )
}

export default VideoAuthor
