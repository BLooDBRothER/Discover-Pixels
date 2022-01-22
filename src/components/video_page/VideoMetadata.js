import React from 'react';

const VideoMetadata = ({sec, maxWidth, maxHeight, type}) => {
    return (
        <div className="image-metadata">
            <h1 className='image-metadata--title'>Video Metadata</h1>
            <div className='image-metadata--container image-metadata--size'>
                <h3>Duration: </h3>
                <div>{sec} <span className="accent">seconds</span></div>
            </div>
            <div className='image-metadata--container image-metadata--width'>
                <h3>Max - Width <span className='accent'>X</span> Height:</h3>
                <div>{maxWidth} <span className='accent'>X</span> {maxHeight}</div>
            </div>
            <div className='image-metadata--container image-metadata--type'>
                <h3>Type: </h3>
                <div>{type}</div>
            </div>
        </div>
    )
}

export default VideoMetadata;
