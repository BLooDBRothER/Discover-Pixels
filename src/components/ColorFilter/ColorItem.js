import React, { useContext, useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { tempColorContext } from './ColorFilter';

const ColorItem = ({theme, colorValue, colorName}) => {
    const [isSelected, setIsSelected] = useState(false);
    const {tempColorList, setTempColorList} = useContext(tempColorContext);

    useEffect(() => {
        if(tempColorList.some(color => color === colorName)){
            setIsSelected(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tempColorList])

    const toggleSelection = () => {
        if(!isSelected){
            setTempColorList(prevArray => [...prevArray, colorName]);
        }
        else{
            const removedColorArray = tempColorList.filter(color => color !== colorName);
            setTempColorList(removedColorArray);
        }
        setIsSelected(prev => !prev);
    }

    return (
        <div className='colors' style={{backgroundColor: colorValue}} onClick={toggleSelection}>
            {isSelected && <TiTick className={`color-selected-ic ${theme === "dark" ? "dark" : "light"}`}/>}
        </div>
    )
}

export default ColorItem;
