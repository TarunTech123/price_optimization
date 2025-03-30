import React from 'react'

import './InfoCard.css'
import { CardProps } from '../../utils/types/Types';

const InfoCard: React.FC<CardProps> = ({ imageSrc, title, description, onClick }) => {

    return (
        <div className="card" onClick={onClick}>
            <img src={imageSrc} alt="Card Icon" className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <i className="card-arrow bi bi-arrow-right" />
        </div>
    );
};

export default InfoCard;