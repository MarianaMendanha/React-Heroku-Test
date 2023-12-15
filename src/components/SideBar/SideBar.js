import React from 'react';
import { Link } from 'react-router-dom'; 
import './SideBar.css';
import logoAkvofluo from '../../assets/images/logo_Akvofluo_para_Fundo_Escuro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faWater, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <a className="sidebar-logo-link" href="https://akvofluo.com.br/">
                <img src={logoAkvofluo} alt="Logo Akvofluo" className="sidebar-logo" />
            </a>
            <div className="sidebar-divider"></div>
            <div className='sidebar-items'>
                <div className="sidebar-item">
                    <FontAwesomeIcon icon={faTachometerAlt} className="sidebar-item-icon" />
                    Dashboard
                </div>
                <div className="sidebar-item"> {/*Link to="/dashboard"*/}
                    <FontAwesomeIcon icon={faWater} className="sidebar-item-icon" />
                    Contas de Água
                </div>
            </div>
            
            <div className="sidebar-divider"></div>
            {/* Adicione mais itens conforme necessário */}
            <div className="sidebar-back-button">
                {/* <span className="arrow-icon">&#60;</span> */}
                <FontAwesomeIcon icon={faCircleChevronLeft} className="icon" />
            </div>
            
        </div>
    );
};

export default Sidebar;
