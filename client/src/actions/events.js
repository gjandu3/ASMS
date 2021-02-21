import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes'; 

import * as api from '../api/events.js'; 

/*
These are all the unique operations that 
can be done to the Events object in the backend
Includes a get request for all of them, creating one and
updating 
*/

export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEvents(); 
        dispatch({ type: FETCH_ALL, payload: data });
    } catch(error) {
        console.log(error.message); 
    }
}; 

export const createEvent = (event) => async (dispatch) => {
    try {
        const { data } = await api.createEvent(event); 
        dispatch({ type: CREATE, payload: data }); 
    } catch(error) {
        console.log(error.message)
    }
}

export const updateVolunteersSigned = (id, event) => async (dispatch) => {
    try {
        const { data } = await api.updateVolunteersSigned(id, event);
        dispatch({ type: UPDATE, payload: data }); 
    } catch(error) {
        console.log(error.message)
    }
}