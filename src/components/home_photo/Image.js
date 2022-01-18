/* eslint-disable array-callback-return */
import React from 'react';
import { useLastObjectContext } from '../last_intersection_observer/LastObjectContext';
import ImageAuthordata from './ImageAuthordata';
import ImageMetadata from './ImageMetadata';

const Image = ({imageItems, indexPosition, imageX, lastImageRef=null}) => {
    const lastContextData =  useLastObjectContext();
    const handleAfterLoad = (e) => {
        e.target.style.height = "auto";
    }
    const isLastData = (index) => {
        return (indexPosition === (imageX-1) && (index+imageX) >= imageItems.length)  ? true : false;
    }
    return (
        <>
            {imageItems.map((item, index) => {
                if(index % imageX === indexPosition){
                    return (<div className='image' key={item.id.toString() + index} ref={isLastData(index) ? lastContextData : null} >
                                <ImageAuthordata authorName={item.user} authorPic={item.userImageURL} />
                                <img className={`image-${imageX}x`} src={item.webformatURL} style={{height: "400px"}} onLoad={handleAfterLoad} loading='lazy' alt={index} />
                                <ImageMetadata viewCount={item.views} downloads={item.downloads} likes={item.likes} commentCount={item.comments} />
                            </div>)
                }
            })}
        </>
    )
    
}

export default Image;