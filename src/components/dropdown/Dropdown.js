import React, { useState, useEffect, useRef } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import DropdownList from './DropdownList';

const Dropdown = ({classValue, setSelectedValue, defaultVaueId=0, items, enableHoverEffect=false}) => {
    
    const [selected, setSelected] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const dropdownListRef = useRef(null);
    
    // handle outside click
    const handleOutsideClick = () => {
        setIsOpen(false); 
    }
    useEffect(() => {
        if(!dropdownListRef.current) return;
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        }
    });

    useEffect(() => {
        // console.log("Hell",defaultVaueId);
        setSelected(items[defaultVaueId]);
        // setSelected(items[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultVaueId]);

    const toggleDropdown = (value, e) => {
        setIsOpen(value);
    }

    return (
        <div 
         className={`dropdown ${classValue} ${isOpen ? "active" : "inactive"}`}
         onMouseEnter={enableHoverEffect ? toggleDropdown.bind(null, true) : undefined}
         onMouseLeave={enableHoverEffect ? toggleDropdown.bind(null, false) : undefined}>
            <h4 className='dropdown-title' onClick={toggleDropdown.bind(null, !isOpen)}>{selected.value}{isOpen ? <FaCaretUp className='dropdown-ic' /> : <FaCaretDown className='dropdown-ic' />}</h4>
            {isOpen && (
                <div className='dropdown-lists' ref={dropdownListRef}>
                    {items.map(item => (
                        <DropdownList key={item.id} item={item} selected={selected} setIsOpen={setIsOpen} setSelcted={setSelected} setSelectedValue={setSelectedValue} />
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default Dropdown;
