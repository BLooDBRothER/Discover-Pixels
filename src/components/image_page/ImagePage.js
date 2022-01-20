import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DownloadButton } from './DownloadButton';
import ImageMetadata from './ImageMetadata';
import ImageUserData from './ImageUserData';
import TagButton from './TagButton';

const ImagePage = ({setIsNavbarVisible}) => {
    
    const params = useParams();
    const [imageId, setImageId] = useState(params.imageId);
    const [imageData, setImageData] = useState({}) 

    useEffect(() => {
        setIsNavbarVisible(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log("")
        async function getData(){
            const data = await axios.get(`https://pixabay.com/api/?key=20726322-5f0bca4f140876f7d307a8d94&id=${imageId}`)
            console.log(data.data.hits[0]);
            setImageData(data.data.hits[0]);
        }
        getData();
    }, [imageId]);

    useEffect(() => {setImageId(params.imageId)}, [params])

    return (
        <div className='main-image'>
            <img className='main-image--img' src={imageData.largeImageURL} alt={imageData.tags} />
            <div className='image-data'>
                <ImageUserData name={imageData.user} picUrl={imageData.userImageURL} />
                <ImageMetadata size={imageData.imageSize} maxHeight={imageData.imageHeight} maxWidth={imageData.imageWidth} />
                <DownloadButton src={imageData.pageURL}/>
                <div className='image-data-category'>
                    {imageData.tags?.split(", ").map(tag => {
                        return <TagButton key={tag} value={tag} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ImagePage;
