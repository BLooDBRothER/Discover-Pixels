import { useState, useEffect } from 'react';
import axios from 'axios';

const useImageGet = (q, image_type, order, orientation, category, safesearch=false, editors_choice=false, pageNumber) => {
    const [imageData, setImageData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const per_page = 20;

    if(image_type === "images"){
        image_type = "all"
    }
    if(orientation === "Orientation"){
        orientation = "all"
    }
    if(category === "Category"){
        category = "";
    }

    useEffect(() => {
        setImageData([]);
        setHasMore(true);
    }, [q, order, safesearch, editors_choice, category, orientation, image_type]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://pixabay.com/api/",
            params: {key: process.env.REACT_APP_PIXABAY_KEY, q, image_type, order, orientation, category, safesearch,  page: pageNumber, per_page, editors_choice},
        }).then(res => {
            console.log(res.data);
            if((pageNumber*per_page) >= res.data.totalHits){
                setHasMore(false);
            }
            setImageData(prevState => [...prevState, ...res.data.hits]);
        }).catch(e => {
            console.log(e);
        })
    }, [q, image_type, order, orientation, category, safesearch, editors_choice, pageNumber]);
    return {imageData, hasMore};
}

export default useImageGet;
