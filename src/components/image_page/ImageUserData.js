import React from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ImageUserData = ({name, picUrl, navigateUrl}) => {
    const navigate = useNavigate();
    const loadUserImage = () => {
        navigate(navigateUrl);
    }

    return (
        <div className='image-data-user'>
            <h2 className='image-data-author' onClick={loadUserImage}>{name}<BsArrowRightCircleFill className="link-arrow" /></h2>
            <img className='image-data-pic' src={picUrl} alt="user-pic"/>
        </div>
    )
}

export default ImageUserData;
