import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ClearFilter = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {console.log(isDisabled)}, [isDisabled])

    useEffect(() => {
        searchParams.toString() === '' ? setIsDisabled(true) : setIsDisabled(false);
        console.log(searchParams, searchParams.values(), searchParams.toString());
    }, [searchParams])

    const clearFilters = () => {
        if(isDisabled) return;
        console.log("in")
        setSearchParams({});
    }

    return (
        <div className={`clear-filter ${isDisabled ? "disabled" : ""}`} onClick={clearFilters}>
            Clear Filters
        </div>
    )
}

export default ClearFilter;
