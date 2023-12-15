import React from 'react';
import './Dropdown.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ id, label, options, onChange }) => {
    return (
        <div className="dropdown">
            <select id={id} onChange={onChange} defaultValue="">
                <option value="" disabled hidden>{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
        </div>
    );
};

export default Dropdown;
