import * as actionTypes from './actionTypes';
import api from '../../services';
import { handleError } from '../handleError';

export const getDataByIdStarted = () => ({
    type: actionTypes.GET_DATA_BY_ID_STARTED
});

export const getDataByIdSucceed = (data, filter) => ({
    type: actionTypes.GET_DATA_BY_ID_SUCCEED,
    id: data.url,
    filter,
    data
});

export const getDataByIdLoaded = (filter, id) => ({
    type: actionTypes.GET_DATA_BY_ID_LOADED,
    filter,
    id
});

export const goBackToPage = () => ({
    type: actionTypes.GO_BACK_TO_PAGE
});

const addDataToCard = (cardAdd, card) => {
    for (let attr in card) {
        if (attr === 'homeworld') card.homeworld = cardAdd.find(res => (/planets/).test(res.url));
        if (Array.isArray(card[attr])) card[attr] = cardAdd.filter(res => ~res.url.indexOf(attr));
    }

    return card;
}

const fetchDataByUrl = card => {
    const urls = [];
    const cardRef = [];

    for (let attr in card) {
        if (attr === 'homeworld') urls.push(card[attr]);
        if (Array.isArray(card[attr])) {
            card[attr].forEach(url => urls.push(url));
        }
    }

    return Promise.all(
        urls.map(async url => {
            let response = await api.fetch.get(url);
            cardRef.push(response.data);
        })
    ).then(resolve => cardRef);
}

const getAdditionalDataToCard = cardId => (
    async (dispatch, getState) => {
        dispatch(getDataByIdStarted());

        const {
            actualPage,
            filteredBy
        } = getState().getDataByPageReducer;
        const response = getState().getDataByPageReducer.dataByFilter[filteredBy][actualPage];
        const card = response.data.find(card => card.url === cardId);
        
        try {
            const cardAdd = await fetchDataByUrl(card);
            const cardAdded = addDataToCard(cardAdd, card);

            dispatch(getDataByIdSucceed(cardAdded, filteredBy));
        } catch(err) {
            const error = {
                status: true,
                type: 'error',
                code: actionTypes.GET_DATA_BY_ID_FAILED,
                message: `Couldn't fetch
                    ${card.name ? card.name : card.title}
                    data right now. Please, try again later.`
            };

            dispatch(handleError(error));
            setTimeout(
                () => dispatch(goBackToPage()),
            3800);
        }
    }
);

const hasCardsDataInStore = (filter, id, store) => {
    if (store[filter]) {
        if (store[filter][id]) return true;
        return false;
    }
    return false;
}

export const fetchCardDataIfNeeded = cardId => (
    (dispatch, getState) => {
        const byPage = getState().getDataByPageReducer;
        const byId = getState().getDataByIdReducer;
        
        if (!hasCardsDataInStore(byPage.filteredBy, cardId, byId.cardsData)) return dispatch(getAdditionalDataToCard(cardId));
        return dispatch(getDataByIdLoaded(byPage.filteredBy, cardId));
    }
);