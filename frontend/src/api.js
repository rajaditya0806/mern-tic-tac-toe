import axios from 'axios';
//CREATING A API SERVICE
//This file will handle all the communication between your React frontend and your Express backend.

const API_URL= 'http://localhost:5000/api/game';


export const createNewGame = () => {
    return axios.post(`${API_URL}/new`);
};

export const fetchGame = (id) => {
    return axios.get(`${API_URL}/${id}/move`);
}

export const playMove = (id, index) =>{
    return axios.put(`${API_URL}/${id}/move`, {index});
};