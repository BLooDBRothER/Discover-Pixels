import axios from 'axios';
import { useState, useEffect } from 'react'

const useImageOrderQuery = (order, pageNumber) => {
    const [imageData, setImageData] = useState([]);
    let cancel;
    useEffect(() => {
        console.log(process.env.REACT_APP_PIXABAY_KEY)
        axios({
            method: "GET",
            url: "https://pixabay.com/api/",
            params: {key: process.env.REACT_APP_PIXABAY_KEY, order:order, per_page:"40"},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data.hits);
            setImageData(res.data.hits);
        }).catch(e => {
            console.log(e);
        })
        return () => cancel();
    }, [order]);
    return imageData;
}

export default useImageOrderQuery;
