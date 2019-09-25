import api from '../../services';
import * as actionTypes from './actionTypes';

export const getDataByPageStarted = (filter, page) => ({
    type: actionTypes.GET_DATA_BY_PAGE_STARTED,
    filter,
    page
});

export const getDataByPageSucceed = (filter, page, data) => ({
    type: actionTypes.GET_DATA_BY_PAGE_SUCCEED,
    total: data.count,
    data: data.results,
    nextPage: data.next,
    prevPage: data.previous,
    filter,
    page
});

export const getDataByPageFailed = error => ({
    type: actionTypes.GET_DATA_BY_PAGE_FAILED,
    error
});

export const getDataByPageLoaded = (filter, page) => ({
    type: actionTypes.GET_DATA_BY_PAGE_LOADED,
    filter,
    page
});

const fetchData = (filter, page) => {
    return async dispatch => {
        dispatch(getDataByPageStarted(filter, page))

        try {
            let response = await api.fetchBase.get(`${filter}/?page=${page}`);
            if (response.status === 200) {
                dispatch(getDataByPageSucceed(filter, page, response.data));
            } else {
                console.log('getDataByPageError', response);
            }
        } catch(err) {
            dispatch(getDataByPageFailed(err));
        }
    }
};

const hasDataInStore = (filter, page, state) => {
    const data = state.getDataByPageReducer.dataByFilter[filter];
    if (!data) return false;
    if (!data[page]) return false;
    return true;
};

export const fetchDataIfNeeded = (filter, page) => (
    (dispatch, getState) => {
        if (!hasDataInStore(filter, page, getState())) return dispatch(fetchData(filter, page));
        return dispatch(getDataByPageLoaded(filter, page));
    }
);