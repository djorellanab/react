import { createStore, combineReducers} from 'redux';
import {homeReducer, modalReducer} from '.';

const reducers = combineReducers({homeReducer, modalReducer});

export default createStore(reducers);