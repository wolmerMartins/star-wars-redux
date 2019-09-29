import api from '../../services';
import * as actionTypes from './actionTypes';
import { handleError } from '../handleError';
import { goBackToPage } from '../getDataById';
import _ from 'lodash';

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
                throw new Error();
            }
        } catch(err) {
            const error = {
                status: true,
                type: 'error',
                code: actionTypes.GET_DATA_BY_PAGE_FAILED,
                message: `An error has occurred fetching
                    page ${page} of ${_.capitalize(filter)}.
                    Try refresh the page.`
            };

            dispatch(handleError(error));
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
        dispatch(goBackToPage());
        if (!hasDataInStore(filter, page, getState())) return dispatch(fetchData(filter, page));
        return dispatch(getDataByPageLoaded(filter, page));
    }
);