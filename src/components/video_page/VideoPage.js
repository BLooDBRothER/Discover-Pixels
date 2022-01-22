import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiLoaderCircle } from 'react-icons/bi';
import ImageUserData from '../image_page/ImageUserData';
import VideoMetadata from './VideoMetadata';
import { DownloadButton } from '../image_page/DownloadButton';
import Dropdown from '../dropdown/Dropdown';
import TagButton from '../image_page/TagButton';

const VideoPage = ({setIsNavbarVisible}) => {    
    const params = useParams();
    const [videoId, setVideoId] = useState(params.videoId);
    const [videoData, setVideoData] = useState({}) 
    const [videoUrl, setVideoUrl] = useState("");
    const [selectedSize, setSlectedSize] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");
    const [dropdownItems, setDropdownItems] = useState([]);
    useEffect(() => {
        setIsNavbarVisible(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        dropdownItems.forEach(item => {
            if(selectedSize === item.value){
                console.log(item);
                setDownloadUrl(`${videoData.videos[item.id].url}&download=1`);
            }
        })
    },[selectedSize]);

    useEffect(() => {console.log(videoUrl, downloadUrl)}, [videoUrl, downloadUrl]);

    const createDropdownItems = (data) => {
        console.log(data);
        const items = [];
        for(const key in data){
            const item = {
                id: key,
                value: `${key} - ${data[key].width} x ${data[key].height}`
            }
            items.push(item);
        }
        console.log(items);
        setDropdownItems(items);
    }

    useEffect(() => {
        async function getData(){
            const data = await axios.get(`https://pixabay.com/api/videos/?key=20726322-5f0bca4f140876f7d307a8d94&id=${videoId}`)
            console.log(data.data.hits[0]);
            setVideoData(data.data.hits[0]);
            setVideoUrl(data.data.hits[0].videos.large.url);
            setDownloadUrl(`${data.data.hits[0].videos.large.url}&download=1`);
            createDropdownItems(data.data.hits[0].videos);
        }
        getData();
    }, [videoId]);

    useEffect(() => {setVideoId(params.videoId)}, [params])

    return (
        <div className='main-video'>
            {videoUrl !== "" ? <video className='main-video--vid' controls="controls">
               <source src={videoUrl} alt={videoData.tags}/>
            </video>
            :  <BiLoaderCircle className="loader-ic" />}
            <div className='image-data'>
                <ImageUserData name={videoData.user} picUrl={videoData.userImageURL} navigateUrl={`/search/video/user:${videoData.user}`} />
                <VideoMetadata sec={videoData.duration} maxHeight={videoData?.videos?.large.height} maxWidth={videoData?.videos?.large.width} type={videoData.type} />
                {dropdownItems.length !== 0 && <div className='main-video--download'>
                    <Dropdown classValue="main-video--download-quality" setSelectedValue={setSlectedSize} items={dropdownItems}/>
                    <DownloadButton src={`${downloadUrl}`} />
                </div>}
                <div className='image-data-category'>
                    {videoData.tags?.split(", ").map(tag => {
                        return <TagButton key={tag} value={tag} navigateUrl={`/search/video/${tag}`}/>
                    })}
                </div>
            </div>
        </div>
        // <div className='main-image'>
        //     <img className='main-image--img' src={videoData.largeImageURL} alt={videoData.tags} />
        //     <div className='image-data'>
        //         <ImageUserData name={videoData.user} picUrl={videoData.userImageURL} />
        //         <ImageMetadata size={videoData.imageSize} maxHeight={videoData.imageHeight} maxWidth={videoData.imageWidth} type={videoData.type} />
        //         <DownloadButton src={videoData.pageURL}/>
        //         <div className='image-data-category'>
        //             {videoData.tags?.split(", ").map(tag => {
        //                 return <TagButton key={tag} value={tag} />
        //             })}
        //         </div>
        //     </div>
        // </div>
    )
}

export default VideoPage;
