import React from 'react'

import './Dropdown.css';

type DropdownProps = {
    placeholder: string;
    value: string | number;
    options: string[];
    onChange: () => void
}
const Dropdown: React.FC<DropdownProps> = ({ placeholder, value, options, onChange }) => {

    return (
        <select className="category-dropdown" value={value} onChange={onChange}>
            <option value='' selected={false}>{placeholder}</option>
            {options.map((item: string, index: number) => {
                return <option value={item} key={index}>{item}</option>
            })}
        </select>
    )
}

export default Dropdown;