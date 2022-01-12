import React from 'react';

const Image = ({imageItems, indexPosition, imageX}) => {
    return (
        <>
            {imageItems.map((item, index) => {
                if(index % imageX === indexPosition){
                    return <img className={`image-${imageX}x`} key={index} src={item.webformatURL} alt={index} />
                }
            })}
        </>
    )
}

export default Image;
