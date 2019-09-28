import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';
import CardDetailsHeader from '../CardDetailsHeader';

import { withLists } from '../WithLists';

const PeopleDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.name} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <CardDetailsHeader cardData={props.cardData} subtitle={'homeworld.name'}
                additionalData={['species[0].name', 'gender', 'birth_year']} />

            <div className="card-body">
                <CardList lists={props.lists} />        
            </div>
        </div>
    </div>
);

PeopleDetails.propTypes = {
    cardData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        homeworld: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        species: PropTypes.arrayOf(
            PropTypes.object.isRequired,
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })).isRequired,
        gender: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        films: PropTypes.array,
        starships: PropTypes.array,
        vehicles: PropTypes.array
    }).isRequired,
    lists: PropTypes.array.isRequired,
    goBackToPage: PropTypes.func.isRequired
}

export default withLists(PeopleDetails);