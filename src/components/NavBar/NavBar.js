// src/components/NavBar/Navbar.js
import React from 'react';
import './NavBar.css'; // Certifique-se de que o caminho do arquivo CSS está correto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* AKVOFLUO - Barra de Navegação */}
            </div>
            <div className="navbar-items">
                {/* Outros elementos de navegação se precisar */}
            </div>
            <div className='search-right'>
                <div className="navbar-divider" />  
                <FontAwesomeIcon icon={faSearch} className="navbar-search" />  
            </div>
        
        </nav>
    );
};

export default Navbar;
