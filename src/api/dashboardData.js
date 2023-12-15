// src/api/dashboardData.js
const getDashboardData = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/dashboard/data/');
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar dados da dashboard:", error);
        return null;
    }
};

export default getDashboardData;