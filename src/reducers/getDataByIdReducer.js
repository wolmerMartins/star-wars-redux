import * as actionTypes from '../actions/getDataById/actionTypes';

const initialState = {
    isSelectedCard: false,
    selectedCardId: '',
    isLoading: false,
    cardsData: {},
    error: {}
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
                        ...state.cardsData[action.filter],
                        [action.id]: action.data
                    }
                },
                selectedCardId: action.id,
                filter: action.filter,
                isSelectedCard: true,
                isLoading: false
            }
        case actionTypes.GET_DATA_BY_ID_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.GET_DATA_BY_ID_LOADED:
            return {
                ...state,
                selectedCardId: action.id,
                filter: action.filter,
                isSelectedCard: true
            }
        case actionTypes.GO_BACK_TO_PAGE:
            return {
                ...state,
                isSelectedCard: false,
                selectedCardId: ''
            }
        default:
            return state;
    }
};

export default getDataByIdReducer;