import axios from 'axios';
import {useState, useEffect} from 'react';
import { getRandomCategory } from '../../App';

const useVideoOrderQuery = (order, pageNumber) => {
    const [videoData, setvideoData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const per_page = 20;

    useEffect(() => {
        setvideoData([]);
        setHasMore(true);
    }, [order]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://pixabay.com/api/videos/",
            params: {key: process.env.REACT_APP_PIXABAY_KEY, q:"*", category: getRandomCategory(), order: order, page: pageNumber, per_page, safesearch: true},
        }).then(res => {
            if((pageNumber*per_page) >= res.data.totalHits){
                setHasMore(false);
            }
            setvideoData(prevState => [...prevState, ...res.data.hits]);
        }).catch(e => {
            console.log(e);
        })
    }, [order, pageNumber]);
    return {videoData, hasMore};
}

export default useVideoOrderQuery;
