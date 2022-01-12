import React, { useRef, useEffect, useState } from 'react';
import Image from './Image';

const Images = ({imageItems, containers, lastImageRef}) => {
    
    const imageContainersRef = useRef(null);
    const [containerList, setContainerList] = useState([]);

    useEffect(() => {
        console.log("container", containers);
        let list = [];
        for(let i=0; i<containers; i++){
            if(i === (containers-1)){
                list.push((
                    <div key={i} className='image-container'>
                        <Image imageItems={imageItems} indexPosition={i} imageX={containers}  lastImageRef={lastImageRef}/>
                    </div>
                ));
            }
            else{
                list.push((
                    <div key={i} className='image-container'>
                        <Image imageItems={imageItems} indexPosition={i} imageX={containers} />
                    </div>
                ));
            }
        }
        setContainerList(list);
    }, [containers, imageItems, lastImageRef]);

    return (
        <div ref={imageContainersRef} className='image-containers'>
            {containerList}
        </div>
    )
}

export default Images;
