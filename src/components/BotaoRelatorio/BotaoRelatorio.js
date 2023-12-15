import React from 'react';
import './BotaoRelatorio.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const BotaoRelatorio = ({ onClick }) => {
    return (
        <button className="botao-relatorio" onClick={onClick}>
            <FontAwesomeIcon icon={faDownload} className="fa-sm" /> Gerar Relatório
        </button>
    );
};

export default BotaoRelatorio;
