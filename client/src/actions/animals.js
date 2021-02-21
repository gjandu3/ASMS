import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'; 

import * as api from '../api/animals.js'; 

export const getAnimals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAnimals(); 
        dispatch({ type: FETCH_ALL, payload: data });
    } catch(error) {
        console.log(error.message); 
    }
}; 

export const createAnimal = (animal) => async (dispatch) => {
    try {
        const { data } = await api.createAnimal(animal); 
        dispatch({ type: CREATE, payload: data }); 
    } catch(error) {
        console.log(error.message)
    }
}

export const updateStatus = (id, animal) => async (dispatch) => {
    try {
        const { data } = await api.updateStatus(id, animal);
        dispatch({ type: UPDATE, payload: data }); 
    } catch(error) {
        console.log(error.message)
    }
}

export const deleteAnimal = (id) => async (dispatch) => {
    try {
      await api.deleteAnimal(id);
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };