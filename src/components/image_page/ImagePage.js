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
        async function getData(){
            const data = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&id=${imageId}`);
            setImageData(data.data.hits[0]);
        }
        getData();
    }, [imageId]);

    useEffect(() => {setImageId(params.imageId)}, [params])

    return (
        <div className='main-image'>
            <div className='main-image--cnt'>
                <img className='main-image--img' src={imageData.largeImageURL} alt={imageData.tags} />
            </div>
            <div className='image-data'>
                <ImageUserData name={imageData.user} picUrl={imageData.userImageURL} navigateUrl={`/search/image/user:${imageData.user}`} />
                <ImageMetadata size={imageData.imageSize} maxHeight={imageData.imageHeight} maxWidth={imageData.imageWidth} type={imageData.type} />
                <DownloadButton src={imageData.pageURL}/>
                <div className='image-data-category'>
                    {imageData.tags?.split(", ").map(tag => {
                        return <TagButton key={tag} value={tag} navigateUrl={`/search/image/${tag}`} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ImagePage;
