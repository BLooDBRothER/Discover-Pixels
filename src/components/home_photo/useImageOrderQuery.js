import axios from 'axios';
import { useState, useEffect } from 'react'

const useImageOrderQuery = (order, pageNumber) => {
    const [imageData, setImageData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const per_page = 20;

    useEffect(() => {
        setImageData([]);
    }, [order]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://pixabay.com/api/",
            params: {key: process.env.REACT_APP_PIXABAY_KEY, order: order, page: pageNumber, per_page, safesearch: true},
        }).then(res => {
            if((pageNumber*per_page) >= res.data.totalHits){
                setHasMore(false);
            }
            setImageData(prevState => [...prevState, ...res.data.hits]);
        }).catch(e => {
            console.log(e);
        })
    }, [order, pageNumber]);
    return {imageData, hasMore};
}

export default useImageOrderQuery;
