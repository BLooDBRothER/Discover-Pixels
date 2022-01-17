import React, { useContext } from "react";
import { FilterChangeContext, QueryChangeContext } from "../../App";

const DropdownList = ({item, selected, setSelcted, setIsOpen, setSelectedValue}) => {

    const localQueryChangeContext = useContext(FilterChangeContext);
    const localKeyValueContext = useContext(QueryChangeContext)

    const handleSelection = () => {
        if(selected.id === item.id) return;
        const selectedValue = item.value.toLowerCase();
        setSelectedValue(selectedValue);
        setSelcted(item);
        setIsOpen(false);
        if(!localQueryChangeContext || !localKeyValueContext) return;
        localQueryChangeContext(localKeyValueContext.key, selectedValue, localKeyValueContext.default);
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
