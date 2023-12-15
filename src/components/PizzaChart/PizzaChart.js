import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './PizzaChart.css'; 
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.register(ChartDataLabels);

const generateBlueGradientColors = (length) => {
    const startColor = { r: 0xD3, g: 0xEA, b: 0xF2 }; // #D3EAF2
    const endColor = { r: 0x00, g: 0x20, b: 0x90 }; // #0B2D39 #000080 #09444d
    return Array.from({ length }, (_, i) => {
        const r = startColor.r + ((endColor.r - startColor.r) / length) * i;
        const g = startColor.g + ((endColor.g - startColor.g) / length) * i;
        const b = startColor.b + ((endColor.b - startColor.b) / length) * i;
        return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    });
};

const PizzaChart = ({ title, data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: '% de Consumo',
                data: data,
                backgroundColor: generateBlueGradientColors(data.length),
                borderWidth: 0,
                hoverOffset: 4
            },
        ],
    };

    const options = {
        maintainAspectRatio: true, // Isso permite que o gráfico cresça para preencher o contêiner
        responsive: true, // Isso faz com que o gráfico seja responsivo
        // cutout: '70%',
        plugins: {
            legend: {
                display: true, // legenda padrão do Chart.js
            },
            // datalabels: {
            //     display: true,
            //     color: '#fff',
            //     formatter: (value, context) => {
            //         let sum = 0;
            //         let dataArr = context.chart.data.datasets[0].data;
            //         dataArr.map(data => sum += data);
            //         let percentage = (value*100 / sum).toFixed(2)+"%";
            //         return percentage;
            //     },
            //     font: {
            //         weight: 'bold',
            //         size: 16,
            //     },
            // },
        },
    };

    return (
        <div className="pizza-chart-card">
            <div className="pizza-card-header">
                {title}
            </div>
            <div className="chart-container-pizza">
                <Doughnut data={chartData} options={options} />
            </div>
            {/* A legenda personalizada poderia ser implementada aqui se necessário */}
        </div>
    );
};

export default PizzaChart;
