import axios from 'axios'; 

const url = 'https://asms.herokuapp.com/animals';

export const fetchAnimals = () => axios.get(url); 
export const createAnimal = (newAnimal) => axios.post(url, newAnimal); 
export const updateStatus = (id, updatedStatus) => axios.patch(`${url}/${id}`, updatedStatus); 
export const deleteAnimal = (id) => axios.delete(`${url}/${id}`)