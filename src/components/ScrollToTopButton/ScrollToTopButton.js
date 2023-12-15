import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollToTopButton.css'; // Certifique-se de criar este arquivo CSS

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Função para monitorar a posição de rolagem da página
    const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // O botão se tornará visível após 300px de rolagem
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
};

  // Função para rolar para o topo
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
        window.removeEventListener('scroll', toggleVisibility);
    };
}, []);

return (
    <button
        className="scroll-to-top-button"
        onClick={scrollToTop}
        style={{ 
            opacity: isVisible ? 0.8 : 0, 
            cursor: isVisible ? 'pointer' : 'default',
            transition: 'opacity 0.5s ease-in-out' 
        }}
    >
        <FontAwesomeIcon icon={faChevronUp} className="icon-top-scroll" />
    </button>
);
};

export default ScrollToTopButton;
