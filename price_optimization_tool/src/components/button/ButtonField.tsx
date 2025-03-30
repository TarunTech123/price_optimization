import React from 'react'

import './ButtonField.css'
import { ButtonProps } from '../../utils/types/Types';

const ButtonField: React.FC<ButtonProps> = ({ label, icon, onClick, isPrimary = false, isDisabled, type = 'button' }) => {

    return (
        <button
            className={isPrimary ? "action-btn" : label==='Back' ? "action-btn-back" : 'action-btn_secondary'}
            disabled={isDisabled}
            onClick={onClick}
            type={type}
        >
            <i className={`${icon} me-2`} /> {label}
        </button>
    )
}

export default ButtonField;