import { CREATE, UPDATE, FETCH_ALL } from '../constants/actionTypes'; 

const eventreducer =  (events = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload; 
        case CREATE:
            return [...events, action.payload]; 
        case UPDATE:
            return events.map((event) => (event._id === action.payload._id ? action.payload : event));
        default:
            return events; 
    }
}

export default eventreducer; 