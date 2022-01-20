import React from 'react';
import { useNavigate } from 'react-router-dom';

const TagButton = ({value}) => {
    const navigate = useNavigate();
    const navigatCategory = () => {
        navigate(`/search/image/${value}`);
    }
    // console.log(value?.split(", ").map(tag => {console.log(tag); return tag;}));
    return (
        <div className='category-button' onClick={navigatCategory}>{value}</div>
    )
}

export default TagButton;
