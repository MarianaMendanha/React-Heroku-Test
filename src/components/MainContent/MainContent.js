// src/components/MainContent.js
// import React from 'react';
import React, { useState, useEffect } from 'react';
import getDashboardData from '../../api/dashboardData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaucet, faTint, faMoneyBillWave, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import Dropdown from '../Dropdown/Dropdown'
import ProgressCard from '../ProgressCard/ProgressCard';
import PizzaChart from '../PizzaChart/PizzaChart';
import Chart from '../Chart/Chart';
import BotaoRelatorio from '../BotaoRelatorio/BotaoRelatorio';
import WaterConsumptionCard from '../WaterConsumptionCard/WaterConsumptionCard';

import './MainContent.css'; 
// Importar os componentes

const MainContent = () => {

    const handleRelatorioClick = () => {
        // Função para lidar com o clique no botão
        console.log('Gerando relatório...');
    };

    // Dummy data, substitua com dados da sua API
    const cardsData = [
        { 
            title: 'CONSUMO DE ÁGUA DO MÊS ATUAL', 
            value: '515 mil Litros',
            icon: <FontAwesomeIcon icon={faFaucet} />, // Ícone de torneira
            className: 'blue-border'
        },
        { 
            title: 'CONSUMO DE ÁGUA PROJETADO', 
            value: '726 mil Litros',
            icon: <FontAwesomeIcon icon={faTint} />, // Ícone de gota
            className: 'blue-border'
        },
        { 
            title: 'VALOR PROJETADO DA CONTA', 
            value: 'R$ 8363.2',
            icon: <FontAwesomeIcon icon={faMoneyBillWave} />, // Ícone de conta ou $
            className: 'green-border'
        },
        { 
            title: 'ESTIMATIVA DE ECONOMIA', 
            value: 'R$ -2699.92',
            icon: <FontAwesomeIcon icon={faHandHoldingUsd} />, // Ícone de economia/mão com $
            className: 'green-border'
        },
        // ... outros cartões se necessário
    ];

    const [selectedOption, setSelectedOption] = useState(''); // Dropdown

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const dropdownOptions = [
        { label: 'Opção 1', value: '1' },
        { label: 'Opção 2', value: '2' },
        // ... outros dados específicos
    ];

    const [dashboardData, setDashboardData] = useState(null); // Dados

    useEffect(() => {
        async function fetchData() {
            const data = await getDashboardData();
            if (data) {
                setDashboardData(data);
            }
        }
        fetchData();
    }, []);

    // Dados e labels do gráfico de pizza (trocar pela lógica)
    const data = [12, 14, 13, 17, 14, 16, 13]; // Os valores do gráfico
    const labelsPizza = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']; // Os rótulos do gráfico

    // Supondo que você tem os dados diários e a média em algum lugar do seu App
    const labels = [
        '01 Nov', '02 Nov', '03 Nov', '04 Nov', '05 Nov', '06 Nov', '07 Nov',
        '08 Nov', '09 Nov', '10 Nov', '11 Nov', '12 Nov', '13 Nov', '14 Nov',
        '15 Nov', '16 Nov', '17 Nov', '18 Nov', '19 Nov', '20 Nov', '21 Nov',
        '22 Nov', '23 Nov', '24 Nov', '25 Nov', '26 Nov', '27 Nov', '28 Nov',
        '29 Nov', '30 Nov'
    ];
    const dailyData = [
        20, 22, 25, 18, 15, 17, 26,
        28, 24, 22, 19, 30, 25, 27,
        21, 24, 23, 26, 18, 20, 22,
        25, 27, 24, 23, 26, 28, 19,
        21, 23
    ];

    const waterLevelPercentage = 57; // A porcentagem de água na esfera
    const waterConsumptionLiters = 120; // O consumo em litros
    

    return (
        <div className="main-content">
            <div className='dashboard-header'>
                <div className='dashboard-header-text'>Dashboard - SQS 211 Bloco G</div>
                <BotaoRelatorio onClick={handleRelatorioClick} />
            </div>
            
            <div className='dropdown-container'>
                <div className='dropdown1'>
                    <Dropdown
                        id="myDropdown"
                        label="Diário"
                        options={dropdownOptions}
                        onChange={handleDropdownChange}
                    />
                    {selectedOption && <p>Opção selecionada: {selectedOption}</p>}
                </div>
                <div className='dropdown2'>
                    <Dropdown
                        id="myDropdown"
                        label="Selecione o mês"
                        options={dropdownOptions}
                        onChange={handleDropdownChange}
                    />
                    {selectedOption && <p>Opção selecionada: {selectedOption}</p>}
                </div>
            </div>

            <div className='periodo-consolidado'>Período Consolidado de 09/11/2023 a 08/12/2023</div>
            
            <div className='cards'> 
                {/* <h4>section CARDS</h4> */}
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        className={card.className}
                    />
                ))}
            </div>

            <div className='card-barra-progresso'>
                <ProgressCard
                    title="Consumo percentual relativo à faixa atual (3ª faixa de tarifação)"
                    subtitle="Faixa de R$ 8.14 / R$ 8.14 (água / esgoto)"
                    progress={57}
                />
            </div>
            
            <div className='chart-container'>
                <div className='chart-barra'>
                    <Chart
                        title="Consumo em 2023-12"
                        labels={labels}
                        dailyData={dailyData}
                    />
                </div>

                <div className='chart-pizza'>
                    <PizzaChart
                        title="Consumo por dia da semana (m³)"
                        data={data}
                        labels={labelsPizza}
                    />
                </div>
            </div>
            

            {dashboardData ? (
                <div>
                    {/* Exemplo: exibir dados como JSON para teste */}
                    <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
                </div>
            ) : (
                <p>Carregando dados...</p>
            )}

            <WaterConsumptionCard 
                percentage={waterLevelPercentage} 
                consumption={waterConsumptionLiters} 
            />
        </div>
    );
};

export default MainContent;
