const API_URL = 'http://localhost:3000/api/clients';

export const fetchClients = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};