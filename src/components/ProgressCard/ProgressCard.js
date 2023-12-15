import React from 'react';
import './ProgressCard.css'; 

const ProgressCard = ({ title, subtitle, progress }) => {
    return (
        <div className="progress-card">
            <div className="progress-card-header">
                {title}
            </div>
            <div className='progress-card-content'>
                <div className="card-footer">
                    {subtitle}
                </div>
                <div className="progress-bar-background">
                    <div 
                        className="progress-bar-fill" 
                        style={{ width: `${progress}%` }} 
                    >
                        <span className="progress-bar-text">{progress}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;
