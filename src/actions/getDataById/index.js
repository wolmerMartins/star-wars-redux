import * as actionTypes from './actionTypes';
import api from '../../services';

export const getDataByIdStarted = () => ({
    type: actionTypes.GET_DATA_BY_ID_STARTED
});

export const getDataByIdSucceed = data => ({
    type: actionTypes.GET_DATA_BY_ID_SUCCEED,
    data
});

export const getDataByIdFailed = error => ({
    type: actionTypes.GET_DATA_BY_ID_FAILED,
    error
});

const addDataToCard = (cardAdd, card) => {
    for (let attr in card) {
        if (attr === 'homeworld') card.homeworld = cardAdd.find(res => (/planets/).test(res.url));
        if (Array.isArray(card[attr])) card[attr] = cardAdd.filter(res => ~res.url.indexOf(attr));
    }
    console.log('addDataToCard', card);
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

export const getAdditionalDataToCard = cardId => (
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
            addDataToCard(cardAdd, card);
        } catch(err) {
            console.log('getDataByIdFailed', err);
        }
    }
);