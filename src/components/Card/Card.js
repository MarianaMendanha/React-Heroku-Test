// src/components/Card.js
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFaucet, faTint, faMoneyBillWave, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import './Card.css'; // Seu arquivo CSS para estilizar o cartão

const Card = ({ title, value, icon, className }) => {
    return (
        <div className={`card ${className}`}>
            {icon && <div className="card-icon">{icon}</div>}
            <div className="card-details">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default Card;