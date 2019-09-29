import * as actionTypes from './actionTypes';

export const setError = error => ({
    type: actionTypes.SET_ERROR,
    error
});

export const removeError = () => ({
    type: actionTypes.REMOVE_ERROR
});

export const handleError = (error) => (
    (dispatch) => {
        if (error.status) return dispatch(setError(error));
        return dispatch(removeError());
    }
);