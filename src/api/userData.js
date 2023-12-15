// src/api/userData.js
// Funções para buscar e manipular dados do usuário

export const fetchUserData = async (userId) => {
    // Retorna os dados do usuário a partir de uma chamada de API
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
};

export const updateUserData = async (userId, newData) => {
    // Atualiza os dados do usuário através de uma chamada de API
    const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(newData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};
