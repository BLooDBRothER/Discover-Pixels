import React, { useContext, useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { tempColorContext } from './ColorFilter';

const ColorItem = ({theme, colorValue}) => {
    const [isSelected, setIsSelected] = useState(false);
    const {tempColorList, setTempColorList} = useContext(tempColorContext);

    useEffect(() => {
        if(tempColorList.some(color => color === colorValue)){
            setIsSelected(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tempColorList])

    const toggleSelection = () => {
        if(!isSelected){
            setTempColorList(prevArray => [...prevArray, colorValue]);
        }
        else{
            const removedColorArray = tempColorList.filter(color => color !== colorValue);
            setTempColorList(removedColorArray);
        }
        setIsSelected(prev => !prev);
    }

    return (
        <div className='colors' style={{backgroundColor: colorValue === "lilac" ? "#c93ef7" : colorValue}} onClick={toggleSelection}>
            {isSelected && <TiTick className={`color-selected-ic ${theme === "dark" ? "dark" : "light"}`}/>}
        </div>
    )
}

export default ColorItem;
