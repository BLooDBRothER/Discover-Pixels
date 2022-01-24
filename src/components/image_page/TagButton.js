import React from 'react';
import { useNavigate } from 'react-router-dom';

const TagButton = ({value, navigateUrl}) => {
    const navigate = useNavigate();
    const navigatCategory = () => {
        navigate(navigateUrl);
    }
    return (
        <div className='category-button' onClick={navigatCategory}>{value}</div>
    )
}

export default TagButton;
