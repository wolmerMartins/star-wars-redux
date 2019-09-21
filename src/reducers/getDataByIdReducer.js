import * as actionTypes from '../actions/getDataById/actionTypes';

const initialState = {
    isSelectedCard: false,
    selectedCardId: '',
    isLoading: false,
    cardsData: {}
};

const getDataByIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_DATA_BY_ID_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.GET_DATA_BY_ID_SUCCEED:
            return {
                ...state,
                cardsData: {
                    [action.filter]: {
                        [action.id]: action.data
                    }
                },
                selectedCardId: action.id,
                isSelectedCard: true,
                isLoading: false
            }
        default:
            return state;
    }
};

export default getDataByIdReducer;