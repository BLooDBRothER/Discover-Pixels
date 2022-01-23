import React, { useState, useEffect, useRef } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import DropdownList from './DropdownList';

const Dropdown = ({classValue, setSelectedValue, defaultVaueId=0, items, triggerClose=false, enableHoverEffect=false}) => {
    
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
        setSelected(items[defaultVaueId]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultVaueId]);

    useEffect(() => {
        if(!triggerClose) return;
        setIsOpen(false);
    }, [triggerClose])

    const toggleDropdown = (value) => {
        setIsOpen(value);
    }

    return (
        <div 
         className={`dropdown ${classValue} ${isOpen ? "active" : "inactive"}`}
         onMouseEnter={enableHoverEffect ? toggleDropdown.bind(null, true) : undefined}
         onMouseLeave={enableHoverEffect ? toggleDropdown.bind(null, false) : undefined}>
            <div className='dropdown-title' onClick={toggleDropdown.bind(null, !isOpen)}>
                <h4 className='dropdown-title-value'>{selected?.value}</h4>
                {isOpen ? <FaCaretUp className='dropdown-ic' /> : <FaCaretDown className='dropdown-ic' />}
            </div>
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
