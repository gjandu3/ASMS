import { CREATE, UPDATE, FETCH_ALL, DELETE } from '../constants/actionTypes'; 

const animalreducer = (animals = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload; 
        case CREATE:
            return [...animals, action.payload]; 
        case UPDATE:
            return animals.map((animal) => (animal._id === action.payload._id ? action.payload : animal));
        case DELETE:
            return animals.filter((animal) => animal._id !== action.payload);
        default:
            return animals; 
    }
}

export default animalreducer; 