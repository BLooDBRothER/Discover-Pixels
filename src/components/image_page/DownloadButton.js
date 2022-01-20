import React from 'react';
import {AiOutlineDownload} from 'react-icons/ai';

export const DownloadButton = ({src}) => {

    return (
        <a className='download-button-link' target="_blank" rel='noreferrer' href={src}>
        <div className='download-button'>
                <AiOutlineDownload className='button-ic'/>
                <h3 className='button-value' >Download</h3>
        </div>
        </a>
    )
}
