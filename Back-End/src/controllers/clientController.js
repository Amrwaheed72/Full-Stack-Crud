import * as clientService from '../services/clientServices.js';

export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    } catch (err) {
        console.error('Error getting clients', err);
        res.status(500).json({ message: err.message });
    }
}


export const createClient = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientService.createClient(clientData);
        res.status(200).json(newClient);
    } catch (err) {
        console.error('Error getting clients', err);
        res.status(500).json({ message: err.message });
    }
}

export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const updatedClient = await clientService.updateClient(clientData, clientId);
        if (!updatedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(updatedClient);
    } catch (err) {
        console.error('Error getting clients', err);
        res.status(500).json({ message: err.message });
    }
}

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deletedClient = await clientService.deleteClient(clientId);
        if (!deletedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (err) {
        console.error('Error deleting client', err);
        res.status(500).json({ message: err.message });
    }
}

export const searchClients = async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const clients = await clientService.searchClients(searchQuery);
        res.status(200).json(clients);
    } catch (err) {
        console.error('Error searching clients', err);
        res.status(500).json({ message: err.message });
    }
} 