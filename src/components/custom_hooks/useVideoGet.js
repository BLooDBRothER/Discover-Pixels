import { useState, useEffect } from 'react';
import axios from 'axios';

const useVideoGet = (q, video_type, order, orientation, category, safesearch=false, editors_choice=false, pageNumber) => {
    const [videoData, seVideoData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const per_page = 20;

    if(video_type === "videos"){
        video_type = "all"
    }
    if(orientation === "Orientation"){
        orientation = "all"
    }
    if(category === "Category"){
        category = "";
    }

    useEffect(() => {
        seVideoData([]);
        setHasMore(true);
    }, [q, order, safesearch, editors_choice, category, orientation, video_type]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://pixabay.com/api/videos/",
            params: {key: process.env.REACT_APP_PIXABAY_KEY, q, video_type, order, orientation, category, safesearch,  page: pageNumber, per_page, editors_choice},
        }).then(res => {
            console.log(res.data);
            if((pageNumber*per_page) >= res.data.totalHits){
                setHasMore(false);
            }
            seVideoData(prevState => [...prevState, ...res.data.hits]);
        }).catch(e => {
            console.log(e);
        })
    }, [q, video_type, order, orientation, category, safesearch, editors_choice, pageNumber]);
    return {videoData, hasMore};
}

export default useVideoGet;
