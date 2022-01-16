import React, { useRef, useCallback, useContext } from 'react';

export const lastObjectContext = React.createContext(null);

export function useLastObjectContext(){
    return useContext(lastObjectContext);
}

const LastObjectContext = ({children, hasMore, setPageNumber}) => {
    const observer = useRef();
    const lastVideoRef = useCallback((node) => {
        if(!node) return;
        if(!hasMore) {observer.current?.disconnect(); return;}
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setPageNumber(prevPage => prevPage+1);
                observer.current.disconnect();
            }
        },{
            threshold: 1,
            rootMargin: "300px"
        });
        observer.current.observe(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <lastObjectContext.Provider value={lastVideoRef}>
            {children}
        </lastObjectContext.Provider>
    )
}

export default LastObjectContext;
