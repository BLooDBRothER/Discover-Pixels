import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Images from './Images';
import { imgData } from './samepleData';

const dropdownItems = [
    {
        id: 1,
        value: "Popular"
    },
    {
        id: 2,
        value: "Trending"
    }
]

const imageItems = imgData;

const HomePhoto = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState("https://pixabay.com/api/?key=20726322-5f0bca4f140876f7d307a8d94");
    const [imageData, setImageData] = useState({});

    const getData = async () => {
        const data = await axios.get(imageUrl);
        console.log(data)
    }

    // useEffect(() => {
    //     getData();
    // }, [imageUrl])

    return (
        <div className='home-photos'>
            <Dropdown 
             classValue="home-photos-dropdown"
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             items={dropdownItems}/>
            <Images 
             imageItems={imageItems}  
            />
        </div>
    )
}

export default HomePhoto;
