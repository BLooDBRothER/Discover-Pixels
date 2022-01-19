import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ClearFilter = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        searchParams.toString() === '' ? setIsDisabled(true) : setIsDisabled(false);
    }, [searchParams]);

    const clearFilters = () => {
        if(isDisabled) return;
        setSearchParams({});
    }

    return (
        <div className={`clear-filter ${isDisabled ? "disabled" : ""}`} onClick={clearFilters}>
            Clear Filters
        </div>
    )
}

export default ClearFilter;
