import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';
import CardDetailsHeader from '../CardDetailsHeader';

const PlanetDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.name} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <CardDetailsHeader cardData={props.cardData} subtitle={'terrain'}
                additionalData={['climate', 'gravity', 'orbital_period']} />

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