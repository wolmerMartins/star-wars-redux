import * as actionTypes from './actionTypes';
import api from '../../services';

export const getDataByIdStarted = () => ({
    type: actionTypes.GET_DATA_BY_ID_STARTED
});

export const getDataByIdSucceed = (data, filter) => ({
    type: actionTypes.GET_DATA_BY_ID_SUCCEED,
    id: data.url,
    filter,
    data
});

export const getDataByIdFailed = error => ({
    type: actionTypes.GET_DATA_BY_ID_FAILED,
    error
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
            dispatch(getDataByIdFailed(err));
        }
    }
);

const hasCardsDataInStore = (filter, id, store) => {
    if (!filter) return false;
    if (!store[filter][id]) return false;
    return true;
}

export const fetchCardDataIfNeeded = cardId => (
    (dispatch, getState) => {
        const data = getState().getDataByIdReducer;

        if (!hasCardsDataInStore(data.filter, cardId, data.cardsData)) return dispatch(getAdditionalDataToCard(cardId));
        return dispatch(getDataByIdLoaded(data.filter, cardId));
    }
);