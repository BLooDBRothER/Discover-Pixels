/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext, useRef} from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import CheckBox from '../checkbox/CheckBox';
import ColorItem from './ColorItem';
import { colorArrayContext } from '../search_photo/SearchPage';
import { useSearchParams } from 'react-router-dom';

export const tempColorContext = React.createContext(null);

const colorItem = [
    {
        name: "red",
        value: "#FF0000",
        theme: "dark"
    },
    {
        name: "orange",
        value: "#FFA500",
        theme: "light"
    },
    {
        name: "yellow",
        value: "#FF0000",
        theme: "light"
    },
    {
        name: "green",
        value: "#00FF00",
        theme: "light"
    },
    {
        name: "turquoise",
        value: "#40E0D0",
        theme: "light"
    },
    {
        name: "blue",
        value: "#0000FF",
        theme: "dark"
    },
    {
        name: "lilac",
        value: "#c93ef7",
        theme: "light"
    },
    {
        name: "pink",
        value: "#FFC0CB",
        theme: "light"
    },
    {
        name: "white",
        value: "#FFF",
        theme: "light"
    },
    {
        name: "gray",
        value: "#808080",
        theme: "dark"
    },
    {
        name: "black",
        value: "#000",
        theme: "dark"
    },
    {
        name: "brown",
        value: "#A52A2A",
        theme: "dark"
    },
]

const ColorFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownListRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const setColorArray = useContext(colorArrayContext);

    const [tempColorList, setTempColorList] = useState(searchParams.getAll("colors") || []);
    const [isGrayscale, setIsGrayscale] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
        if(isGrayscale){
            setTempColorList(prev => [...prev, "grayscale"]);
        }
        else{
            const removedColorArray = tempColorList.filter(color => color !== "grayscale");
            setTempColorList(removedColorArray);
        }
    }, [isGrayscale]);

    useEffect(() => {
        if(isTransparent){
            setTempColorList(prev => [...prev, "transparent"]);
        }
        else{
            const removedColorArray = tempColorList.filter(color => color !== "transparent");
            setTempColorList(removedColorArray);
        }
    }, [isTransparent]);

    useEffect(() => {
        searchParams.has("colors") ? setTempColorList(searchParams.getAll("colors")) : setTempColorList([])
    }, [searchParams]);

    const toggleDropdown = () => {
        setIsOpen(prevValue => !prevValue);
    }

    const updateColorList = () => {
        setColorArray(tempColorList);
        const queryParams = {colors: tempColorList};
        for(const entry of searchParams.entries()){
            if(entry[0] === "colors") continue;
            queryParams[entry[0]] = entry[1];
        }
        setSearchParams(queryParams);
        setIsOpen(false);
    }

    return (
            <div className={`color-filter ${isOpen ? "active" : ""}`}>
                <div className={"color-filter-title"} onClick={toggleDropdown}>
                    <h3>Colors</h3>
                    {isOpen ? <FaCaretUp className='color-filter-ic' /> : <FaCaretDown className='color-filter-ic' />}
                </div>
                {isOpen && 
                (<div className='color-filter-value' ref={dropdownListRef}>
                    <CheckBox value="Grayscale" checkboxStatue={isGrayscale} setCheckedStatus={setIsGrayscale}></CheckBox>
                    <CheckBox value="Transparent" checkboxStatue={isTransparent} setCheckedStatus={setIsTransparent}></CheckBox>
                    <tempColorContext.Provider value={{tempColorList ,setTempColorList}}>
                        <div className='color-filter-palette'>
                            {colorItem.map(color => <ColorItem key={color.name} theme={color.theme} colorValue={color.value} colorName={color.name} />)}
                        </div>
                    </tempColorContext.Provider>
                    <div className='apply-filter' onClick={updateColorList}>Apply</div>
                </div>)}
            </div>
    )
}

export default ColorFilter;
