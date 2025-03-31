import React from 'react'

import './Dropdown.css';
import { CategoryType } from '../../utils/types/Types';

type DropdownProps = {
    placeholder: string;
    options: CategoryType[] | null | undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
const Dropdown: React.FC<DropdownProps> = ({ placeholder, options, onChange }) => {

    return (
        <select className="category-dropdown" onChange={(e) => onChange(e)}>
            <option value='' selected={false}>{placeholder}</option>
            {options?.map((item: CategoryType, index: number) => {
                return <option value={item?.id} key={index}>{item?.name}</option>
            })}
        </select>
    )
}

export default Dropdown;