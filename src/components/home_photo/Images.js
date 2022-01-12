import React, { useRef, useEffect, useState } from 'react';
import Image from './Image';

const Images = ({imageItems, containers}) => {
    
    const imageContainersRef = useRef(null);
    const [containerList, setContainerList] = useState([]);

    useEffect(() => {
        console.log("container", containers);
        let list = [];
        for(let i=0; i<containers; i++){
            list.push((
                <div key={i} className='image-container'>
                    <Image imageItems={imageItems} indexPosition={i} imageX={containers}/>
                </div>
            ));
        }
        setContainerList(list);
    }, [containers, imageItems]);

    return (
        <div ref={imageContainersRef} className='image-containers'>
            {containerList}
        </div>
    )
}

export default Images;
