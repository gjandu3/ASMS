import { combineReducers } from 'redux'

import event from './events';
import animal from './animals';

export const reducers = combineReducers({ event, animal }); 