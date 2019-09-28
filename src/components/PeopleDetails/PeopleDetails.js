import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';
import CardDetailsHeader from '../CardDetailsHeader';

const PeopleDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.data.name} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <CardDetailsHeader cardData={props.data} subtitle={'homeworld.name'}
                additionalData={['species[0].name', 'gender', 'birth_year']} />

            <div className="card-body">
                {props.data.films.length > 0 &&
                <CardList data={props.data.films} title={'Films'} />}
                {props.data.starships.length > 0 &&
                <CardList data={props.data.starships} title={'Starships'} />}
                {props.data.vehicles.length > 0 &&
                <CardList data={props.data.vehicles} title={'Vehicles'} />}
            </div>
        </div>
    </div>
);

PeopleDetails.propTypes = {
    data: PropTypes.shape({
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
    goBackToPage: PropTypes.func.isRequired
}

export default PeopleDetails;