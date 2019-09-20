import * as actionTypes from '../actions/getDataById/actionTypes';

const initialState = {
    isLoading: false,
    cards: {}
};

const getDataByIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_DATA_BY_ID_STARTED:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
};

export default getDataByIdReducer;