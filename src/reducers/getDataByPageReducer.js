import * as actionTypes from '../actions/getDataByPage/actionTypes';
import Utils from '../utils/Utils';

const initialState = {
    dataByFilter: {},
    actualPage: 1,
    filteredBy: '',
    isLoading: false,
    error: {}
}

const setPages = total => {
    return Math.ceil(total / 10);
}

const getDataByPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_DATA_BY_PAGE_STARTED:
            return {
                ...state,
                filteredBy: action.filter,
                actualPage: parseInt(action.page),
                isLoading: true
            };
        case actionTypes.GET_DATA_BY_PAGE_SUCCEED:
            return {
                ...state,
                dataByFilter: {
                    [action.filter]: {
                        pages: setPages(action.total),
                        ...state.dataByFilter[action.filter],
                        [action.page]: {
                            data: action.data,
                            nextPage: Utils.onlyNumbers(action.nextPage),
                            prevPage: Utils.onlyNumbers(action.prevPage)
                        }
                    }
                },
                isLoading: false
            };
        case actionTypes.GET_DATA_BY_PAGE_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return state;
    }
}

export default getDataByPageReducer;