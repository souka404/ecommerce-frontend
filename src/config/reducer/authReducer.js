// reducers/authReducer.js
import { SET_TOKEN, REMOVE_TOKEN } from '../actions/actionTypes';

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case REMOVE_TOKEN:
            return { ...state, token: null };
        default:
            return state;
    }
};

export default authReducer;
