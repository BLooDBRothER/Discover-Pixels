import React from "react";

const DropdownList = ({item, selected, setSelcted, setIsOpen, setSelectedValue}) => {
    const handleSelection = () => {
        if(selected.id === item.id) return;
        setSelectedValue(item.value.toLowerCase());
        setSelcted(item);
        setIsOpen(false);
    }

    return (
        <div
         key={item.id}
         className={`dropdown-list ${selected.id === item.id ? "dropdown-selected" : ""}`}
         onClick={handleSelection}
        >
            {item.value}
        </div>
    );
};

export default DropdownList;
