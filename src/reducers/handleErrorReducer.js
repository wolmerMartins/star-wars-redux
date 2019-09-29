import * as actionTypes from '../actions/handleError/actionTypes';

const initialState = {
    status: false,
    type: '',
    code: '',
    message: ''
};

const handleErrorReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ERROR:
            return {
                ...state,
                status: action.error.status,
                type: action.error.type,
                code: action.error.code,
                message: action.error.message
            }
        case actionTypes.REMOVE_ERROR:
            return {
                ...state,
                status: false,
                type: '',
                code: '',
                message: ''
            }
        default:
            return state;
    }
};

export default handleErrorReducer;