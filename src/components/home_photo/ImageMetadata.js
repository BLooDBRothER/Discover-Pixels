import React from 'react';
import { FaEye, FaHeart, FaCommentAlt } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const ImageMetadata = ({viewCount, likes, downloads, commentCount}) => {
    return (
        <div className='image-metadata'>
            <div className='image-metadata--views'>
                <FaEye className='image-metadata--ic image-metadata--views-ic'/>
                <h5>{viewCount}</h5>
            </div>
            <div className='image-metadata--likes'>
                <FaHeart className='image-metadata--ic image-metadata--likes-ic'/>
                <h5>{likes}</h5>
            </div>
            <div className='image-metadata--downloads'>
                <HiDownload className='image-metadata--ic image-metadata--downloads-ic'/>
                <h5>{downloads}</h5>
            </div>
            <div className='image-metadata--comments'>
                <FaCommentAlt className='image-metadata--ic image-metadata--comments-ic'/>
                <h5>{commentCount}</h5>
            </div>
        </div>
    )
}

export default ImageMetadata;
