// reducers/index.js
import { combineReducers } from 'redux';
import handleCart from './handleCart';
import authReducer from './authReducer';

const rootReducers = combineReducers({
    handleCart,
    auth: authReducer,
});

export default rootReducers;
