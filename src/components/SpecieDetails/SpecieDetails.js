import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';
import CardDetailsHeader from '../CardDetailsHeader';

import { withLists } from '../WithLists';

const SpecieDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.name} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <CardDetailsHeader cardData={props.cardData} subtitle={'homeworld.name'}
                additionalData={['language', 'classification', 'designation']} />

            <div className="card-body">
                <CardList lists={props.lists} />
            </div>
        </div>
    </div>
);

SpecieDetails.propTypes = {
    cardData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        homeworld: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        language: PropTypes.string.isRequired,
        classification: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        films: PropTypes.array,
        people: PropTypes.array
    }).isRequired,
    lists: PropTypes.array.isRequired,
    goBackToPage: PropTypes.func.isRequired
};

export default withLists(SpecieDetails);