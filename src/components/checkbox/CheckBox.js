import React from 'react'

const CheckBox = ({value, checkboxStatue, setCheckedStatus}) => {
    const toggleCheckbox = () => {
        setCheckedStatus(prevState => !prevState);
    }

    return (
        <div className='checkbox' onClick={toggleCheckbox}>
            <div className={`checkbox-selected ${checkboxStatue ? "selected" : false}`}></div>
            <div className='checkbox-value'>{value}</div>
        </div>
    )
}

export default CheckBox
