import React from 'react'

import './Header.css'
import { HeaderProps } from '../../utils/types/Types';

const Header: React.FC<HeaderProps> = ({title}) => {

    return (
        <header className="header">
            <div className="app-title">{title}</div>
            <div className="user-profile">
                <span className="welcome-text">Welcome, <span className="user-name">Sai Tarun</span></span>
                <div className="user-avatar">
                    <i className='bi bi-person-fill' />
                </div>
            </div>
        </header>
    )
}

export default Header;