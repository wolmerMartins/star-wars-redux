import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const setCardLists = data => {
    let lists = [];

    Object.keys(data).forEach(key => {
        if (~data.url.indexOf('people') && key === 'species') return;
        if (Array.isArray(data[key]) && data[key].length > 0) lists.push({ data: data[key], title: _.capitalize(key) });
    });

    return lists;
};

export const withLists = Component => {
    const WithLists = props => <Component lists={setCardLists(props.cardData)} {...props} />;

    WithLists.propTypes = {
        cardData: PropTypes.object.isRequired
    };

    return WithLists;
};