import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const ImageAuthordata = ({authorName, authorPic}) => {
    console.log(authorPic)
    return (
        <div className='image-author'>
            <h5 className='image-author--name'>{authorName}</h5>
            {(authorPic!=="" ? <img className='image-author--pic' src={authorPic} alt={authorName} /> : <FaUserAlt className='image-author--pic' />)}
        </div>
    )
}

export default ImageAuthordata;
