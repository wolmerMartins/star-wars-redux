import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';
import CardDetailsHeader from '../CardDetailsHeader';

import { withLists } from '../WithLists';

const FilmDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.title} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <CardDetailsHeader cardData={props.cardData} subtitle={'director'}
                additionalData={['producer', 'release_date']} />

            <div className="card-body">
                <CardList lists={props.lists} />
            </div>
        </div>
    </div>
);

FilmDetails.propTypes = {
    cardData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        producer: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        species: PropTypes.array,
        starships: PropTypes.array,
        vehicles: PropTypes.array,
        planets: PropTypes.array,
        characters: PropTypes.array
    }).isRequired,
    lists: PropTypes.array.isRequired,
    goBackToPage: PropTypes.func.isRequired
};

export default withLists(FilmDetails);