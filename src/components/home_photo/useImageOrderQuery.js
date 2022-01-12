import axios from 'axios';
import { useState, useEffect } from 'react'

const useImageOrderQuery = (order, pageNumber) => {
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        setImageData([]);
    }, [order]);

    useEffect(() => {
        console.log(process.env.REACT_APP_PIXABAY_KEY)
        axios({
            method: "GET",
            url: "https://pixabay.com/api/",
            params: {key: process.env.REACT_APP_PIXABAY_KEY, order: order, page: pageNumber, per_page:"20", safesearch: true},
        }).then(res => {
            console.log(res.data.hits);
            setImageData(prevState => [...prevState, ...res.data.hits]);
        }).catch(e => {
            console.log(e);
        })
    }, [order, pageNumber]);
    return imageData;
}

export default useImageOrderQuery;
