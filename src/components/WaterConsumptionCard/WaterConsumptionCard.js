import React from 'react';
import WaveProgress from 'react-wave-progress';
import './WaterConsumptionCard.css'; // Certifique-se de que este caminho está correto

const WaterConsumptionCard = ({ percentage, consumption }) => {
    const validPercentage = Math.min(Math.max(percentage, 0), 100);

    return (
        <div className="water-consumption-card">
            <div className='water-consumption-card-title'>
                Consumo de água em tempo real
            </div>
            <div className='water-consumption-card-content'>
                <div className="wave-progress-container">
                    <WaveProgress
                    r={80} // Raio do WaveProgress
                    percentage={validPercentage}
                    theme="light"
                    />
                </div>
                <div className="consumption">{consumption} Litros</div>
            </div>
        </div>
    );
};

export default WaterConsumptionCard;
