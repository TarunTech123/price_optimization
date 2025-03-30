import React from 'react'

import './Title.css';
import { HeaderProps } from '../../utils/types/Types'

const Title: React.FC<HeaderProps> = ({title}) => {

    return (
        <span className="page-title">{title}</span>
    )
}

export default Title