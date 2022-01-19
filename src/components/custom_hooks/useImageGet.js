/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useImageGet = (q, image_type, order, orientation, category, safesearch=false, editors_choice=false, pageNumber, colorList) => {
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
    }, [q, order, safesearch, editors_choice, category, orientation, image_type, colorList]);

    useEffect(() => {
        async function getData(){
            const res = await axios({
                method: "GET",
                url: "https://pixabay.com/api/",
                params: {key: process.env.REACT_APP_PIXABAY_KEY, q, image_type, order, orientation, category, safesearch,  page: pageNumber, per_page, editors_choice, colors: colorList},
            });
            console.log(res.data);
            if((pageNumber*per_page) >= res.data.totalHits || res.data.totalHits <= pageNumber){
                    setHasMore(false);
            }
            setImageData(prevState => [...prevState, ...res.data.hits]);
        }
        if(hasMore)
            getData();
        
    }, [q, image_type, order, orientation, category, safesearch, editors_choice, pageNumber, colorList, hasMore]);
    return {imageData, hasMore};
}

export default useImageGet;
