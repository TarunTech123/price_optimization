import React from 'react'

import './InputField.css'
import { InputProps } from '../../utils/types/Types';

const InputField: React.FC<InputProps> = ({ icon, placeholder, type, value, onChange, isDisabled = false, isPrimary = false }) => {

    return (
        <div className="search-container" style={{ "--color": isPrimary ? '1px solid var(--text-color-primary)' : '' } as React.CSSProperties}>
            {icon ? <i className={`${icon} me-2`} /> : <></>}
            <input type={type} value={value} className="search-input" placeholder={placeholder} disabled={isDisabled} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
        </div>
    )
}

export default InputField;