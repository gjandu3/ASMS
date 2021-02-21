import axios from 'axios'; 

const url = 'https://asms.herokuapp.com/events';

//establishes connection to the backend for events

export const fetchEvents = () => axios.get(url); 
export const createEvent = (newEvent) => axios.post(url, newEvent); 
export const updateVolunteersSigned = (id, updatedSign) => axios.patch(`${url}/${id}`, updatedSign); 