import React, { useState, useEffect, useRef } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import DropdownList from './DropdownList';

const Dropdown = ({classValue, isOpen, setIsOpen, items, dropdownRef}) => {
    
    const [selected, setSelected] = useState({});
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
        setSelected(items[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`dropdown ${classValue}`}>
            <h4 className='dropdown-title' onClick={toggleDropdown} ref={dropdownRef}>{selected.type}{isOpen ? <FaCaretUp className='dropdown-ic' /> : <FaCaretDown className='dropdown-ic' />}</h4>
            {isOpen && (
                <div className='dropdown-lists' ref={dropdownListRef}>
                    {items.map(item => (
                        <DropdownList key={item.id} item={item} selected={selected} setIsOpen={setIsOpen} setSelcted={setSelected}/>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default Dropdown;
