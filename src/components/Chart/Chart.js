// src/components/Chart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Chart.css'; 


const ChartCard = ({ title, labels, dailyData }) => {
    const calculateMovingAverage = (data, count) => {
        let result = [];
    
        // Começamos com uma média móvel parcial para os primeiros dias
        for (let i = 0; i < data.length; i++) {
            let sum = 0;
            let divisor = 0;
            for (let j = 0; j < count; j++) {
                if (i - j >= 0) {
                    sum += data[i - j];
                    divisor++;
                }
            }
            result.push(sum / divisor);
        }
    
        return result;
    };

    // Calcula a média dos dados diários
    const calculateAverage = (data) => {
        const sum = data.reduce((acc, val) => acc + val, 0);
        return sum / data.length;
    };

    const averageData = calculateMovingAverage(dailyData, 7);
    // Média de consumo diário
    const averageConsumption = calculateAverage(dailyData);
    // Cria um array com a média de consumo diário repetida para cada label
    const averageConsumptionData = new Array(labels.length).fill(averageConsumption);

    // Monta o chartData com os cálculos realizados
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Consumo médio',
                data: averageConsumptionData,
                type: 'line',
                fill: false,
                borderColor: '#0000FF', // Azul para a linha de consumo médio
                borderWidth: 2,
                borderDash: [5, 5], // Estilo de linha tracejada
            },
            {
                label: 'Média móvel de 7 dias',
                data: averageData,
                type: 'line',
                fill: false,
                backgroundColor: '#D3EAF2',
                borderColor: '#000080',
                tension: 0.1,
            },
            {
                label: 'Consumo diário',
                data: dailyData,
                type: 'bar',
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1,
            },
            
            
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true, // Se quiser exibir a legenda
            }
        },
    };

    return (
        <div className="chart-card">
            <div className='chart-title'>
                {title}
            </div>
            <div className='chart-content'>
                Volume (m³)
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default ChartCard;
