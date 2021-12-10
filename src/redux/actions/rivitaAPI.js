import axios from 'axios';
// https://rivitabackend20211127230328.azurewebsites.net
const rivitaAPI = axios.create({
    baseURL: 'https://rivitabackend20211127230328.azurewebsites.net',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default rivitaAPI;
