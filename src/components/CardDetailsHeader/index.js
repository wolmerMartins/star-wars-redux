import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const setAdditionalData = (cardData, data) => {
    let add = _.get(cardData, data);
    if (~data.indexOf('atmosphering') && add !== 'n/a') add = `${add} MAS`;
    if (~data.indexOf('orbital')) add = `${add} OP`;
    return add;
};

const setCardDetailsName = data => {
    if (data.title) return data.title;
    return data.name;
};

const CardDetailsHeader = props => (
    <div className="card-header">
        <span className="card-name-location">
            <h2>{setCardDetailsName(props.cardData)}</h2>
            <h3>{_.get(props.cardData, props.subtitle)}</h3>
        </span>

        <span className="card-additional">
            {props.additionalData.map(data =>
                <p key={data}>{setAdditionalData(props.cardData, data)}</p>
            )}
        </span>
    </div>
);

CardDetailsHeader.propTypes = {
    cardData: PropTypes.object.isRequired,
    subtitle: PropTypes.string.isRequired,
    additionalData: PropTypes.arrayOf(
        PropTypes.string.isRequired).isRequired
};

export default CardDetailsHeader;