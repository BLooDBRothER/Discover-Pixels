import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import DropdownList from './DropdownList';

const Dropdown = ({classValue, items}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState({});
    
    useEffect(() => {
        setSelected(items[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`dropdown ${classValue}`}>
            <h4 className='dropdown-title' onClick={toggleDropdown}>{selected.type}{isOpen ? <FaCaretUp className='dropdown-ic' /> : <FaCaretDown className='dropdown-ic' />}</h4>
            {isOpen && (
                <div className='dropdown-lists'>
                    {items.map(item => (
                        <DropdownList key={item.id} item={item} selected={selected} setIsOpen={setIsOpen} setSelcted={setSelected}/>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default Dropdown;
