import React from 'react';
import ImageAuthordata from './ImageAuthordata';
import ImageMetadata from './ImageMetadata';

const Image = ({imageItems, indexPosition, imageX, lastImageRef=null}) => {
    const handleAfterLoad = (e) => {
        e.target.style.height = "auto";
    }
    return (
        <>
            {imageItems.map((item, index) => {
                if(indexPosition === (imageX-1) && index % imageX === indexPosition && (index+imageX) >= imageItems.length ){
                    return (<div className='image' key={item.id+index}>
                                <ImageAuthordata authorName={item.user} authorPic={item.userImageURL} />
                                <img className={`image-${imageX}x`} src={item.webformatURL} style={{height: "400px"}} onLoad={handleAfterLoad} loading='lazy' alt={index} ref={lastImageRef} />
                                <ImageMetadata viewCount={item.views} downloads={item.downloads} likes={item.likes} commentCount={item.comments} />
                            </div>)
                }
                if(index % imageX === indexPosition){
                    return (<div className='image' key={item.id+index}>
                                <ImageAuthordata authorName={item.user} authorPic={item.userImageURL} />
                                <img className={`image-${imageX}x`} src={item.webformatURL} style={{height: "400px"}} onLoad={handleAfterLoad} loading='lazy' alt={index} />
                                <ImageMetadata viewCount={item.views} downloads={item.downloads} likes={item.likes} commentCount={item.comments} />
                            </div>)
                }
                return <></>;
            })}
        </>
    )
}

export default Image;
