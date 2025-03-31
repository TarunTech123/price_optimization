import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Header.css'
import { HeaderProps } from '../../utils/types/Types';
import ButtonField from '../button/ButtonField';

const Header: React.FC<HeaderProps> = ({ title }) => {

    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="app-title">{title}</div>
            <div className="user-profile">
                <span className="welcome-text">Welcome, <span className="user-name">Sai Tarun</span></span>
                <div className="user-avatar me-2">
                    <i className='bi bi-person-fill' />
                </div>
                <ButtonField label='Logout' icon='bi bi-box-arrow-left' onClick={() => { navigate('/'); localStorage.clear() }} />
            </div>
        </header>
    )
}

export default Header;