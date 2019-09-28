import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const renderCardList = (Component, props) => props.lists
    .map(list => <Component key={list.title} data={list.data} title={list.title} {...props} />
);

export const cardLists = Component => {
    const CardLists = props => (
        <Fragment>
            {props.lists &&
                renderCardList(Component, props)}
        </Fragment>
    );

    CardLists.propTypes = {
        lists: PropTypes.arrayOf(PropTypes.shape({
           data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
           title: PropTypes.string.isRequired 
        }))
    };

    return CardLists;
};