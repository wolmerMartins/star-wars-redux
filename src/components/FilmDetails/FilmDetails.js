import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';
import CardDetailsHeader from '../CardDetailsHeader';

const FilmDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.title} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <CardDetailsHeader cardData={props.cardData} subtitle={'director'}
                additionalData={['producer', 'release_date']} />

            <div className="card-body">
                {props.cardData.species.length > 0 &&
                <CardList data={props.cardData.species} title={'Species'} />}
                {props.cardData.starships.length > 0 &&
                <CardList data={props.cardData.starships} title={'Starships'} />}
                {props.cardData.vehicles.length > 0 &&
                <CardList data={props.cardData.vehicles} title={'Vehicles'} />}
                {props.cardData.planets.length > 0 &&
                <CardList data={props.cardData.planets} title={'Planets'} />}
                {props.cardData.characters.length > 0 &&
                <CardList data={props.cardData.characters} title={'Characters'} />}
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
    goBackToPage: PropTypes.func.isRequired
};

export default FilmDetails;