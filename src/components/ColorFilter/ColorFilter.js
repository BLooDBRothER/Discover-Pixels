/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext, useRef} from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import CheckBox from '../checkbox/CheckBox';
import ColorItem from './ColorItem';
import { colorArrayContext } from '../search_photo/SearchPage';
import { useSearchParams } from 'react-router-dom';

export const tempColorContext = React.createContext(null);

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
                            <ColorItem theme="dark" colorValue="red" />
                            <ColorItem theme="light" colorValue="orange" />
                            <ColorItem theme="light" colorValue="yellow" />
                            <ColorItem theme="dark" colorValue="green" />
                            <ColorItem theme="light" colorValue="turquoise" />
                            <ColorItem theme="dark" colorValue="blue" />
                            <ColorItem theme="light" colorValue="lilac" />
                            <ColorItem theme="light" colorValue="pink" />
                            <ColorItem theme="light" colorValue="white" />
                            <ColorItem theme="dark" colorValue="gray" />
                            <ColorItem theme="dark" colorValue="black" />
                            <ColorItem theme="dark" colorValue="brown" />
                        </div>
                    </tempColorContext.Provider>
                    <div className='apply-filter' onClick={updateColorList}>Apply</div>
                </div>)}
            </div>
    )
}

export default ColorFilter;
