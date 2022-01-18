import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";

const ColorItem = ({theme, colorValue, setColorArry}) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelection = () => {
        setIsSelected(prev => !prev);
    }

    return (
        <div className='colors' style={{backgroundColor: colorValue === "lilac" ? "#c93ef7" : colorValue}} onClick={toggleSelection}>
            {isSelected && <TiTick className={`color-selected-ic ${theme === "dark" ? "dark" : "light"}`}/>}
        </div>
    )
}

export default ColorItem;
