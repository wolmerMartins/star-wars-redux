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

const setPages = total => {
    return Math.ceil(total / 10);
}

const fetchData = (filter, page) => {
    return async dispatch => {
        dispatch(getDataByPageStarted(filter, page))

        try {
            let response = await api.fetchBase.get(`${filter}/?page=${page}`);
            if (response.status === 200) {
                console.log('response', response.data);
                /*const data = {
                    pages: setPages(response.data.count)
                }
                console.log('response data', data);*/
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

export const fetchDataIfNeeded = (filter, page) => {
    return (dispatch, getState) => {
        const {
            getDataByPageReducer
        } = getState();
        if (hasDataInStore(filter, page, getState())) {
            dispatch(getDataByPageStarted(filter, page));
            console.log('prev page', getDataByPageReducer.dataByFilter[filter][page]);
            return dispatch(getDataByPageSucceed(filter, page, getDataByPageReducer.dataByFilter[filter][page]));
        }
        dispatch(fetchData(filter, page));
    }
};