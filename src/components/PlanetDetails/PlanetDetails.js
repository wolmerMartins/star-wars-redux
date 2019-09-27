import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';

const PlanetDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.name} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <div className="card-header">
                <span className="card-name-location">
                    <h2>{props.cardData.name}</h2>
                    <h3><img src="" alt="" />{props.cardData.terrain}</h3>
                </span>

                <span className="card-additional">
                    <p>{props.cardData.climate}</p>
                    <p>{props.cardData.gravity}</p>
                    <p>{props.cardData.orbital_period}</p>
                </span>
            </div>

            <div className="card-body">
                {props.cardData.films.length > 0 &&
                <CardList data={props.cardData.films} title={'Films'} />}
                {props.cardData.residents.length > 0 &&
                <CardList data={props.cardData.residents} title={'Residents'} />}
            </div>
        </div>
    </div>
);

PlanetDetails.propTypes = {
    cardData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        terrain: PropTypes.string.isRequired,
        climate: PropTypes.string.isRequired,
        gravity: PropTypes.string.isRequired,
        orbital_period: PropTypes.string.isRequired,
        films: PropTypes.array,
        residents: PropTypes.array
    }).isRequired,
    goBackToPage: PropTypes.func.isRequired
};

export default PlanetDetails;