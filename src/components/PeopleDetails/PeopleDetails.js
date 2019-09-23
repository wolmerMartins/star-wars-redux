import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';

const PeopleDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.data.name} goBack={props.returnToHome} />
        
        <div className="card-infos">
            <div className="card-header">
                <span className="card-name-location">
                    <h2>{props.data.name}</h2>
                    <h3><img src="" alt="" />{props.data.homeworld.name}</h3>
                </span>

                <span className="card-additional">
                    <p>{props.data.species[0].name}</p>
                    <p>{props.data.gender}</p>
                    <p><img src="" alt="" />{props.data.birth_year}</p>
                </span>
            </div>

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
        films: PropTypes.array.isRequired,
        starships: PropTypes.array.isRequired,
        vehicles: PropTypes.array.isRequired
    }).isRequired
}

export default PeopleDetails;