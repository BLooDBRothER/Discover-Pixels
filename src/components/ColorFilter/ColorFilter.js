import React, {useState, useEffect, useRef} from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import CheckBox from '../checkbox/CheckBox';
import ColorItem from './ColorItem';

const ColorFilter = () => {
    const [selected, setSelected] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownListRef = useRef(null);

    const [isGrayscale, setIsGrayscale] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);
    
    // handle outside click
    // const handleOutsideClick = (e) => {
    //     console.log(e);
    //     setIsOpen(false); 
    // }
    // useEffect(() => {
    //     if(!dropdownListRef.current) return;
    //     document.addEventListener("click", handleOutsideClick);
    //     return () => {
    //         console.log("he")
    //         document.removeEventListener("click", handleOutsideClick);
    //     }
    // });

    const toggleDropdown = () => {
        console.log("he")
        setIsOpen(prevValue => !prevValue);
    }
    useEffect(() => {
        console.log(isOpen);

    }, [isOpen])
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
            </div>)}
        </div>
    )
}

export default ColorFilter;
