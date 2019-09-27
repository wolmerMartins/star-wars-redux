import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';

const StarshipDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.name} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <div className="card-header">
                <span className="card-name-location">
                    <h2>{props.cardData.name}</h2>
                    <h3><img src="" alt="" />{props.cardData.manufacturer}</h3>
                </span>

                <span className="card-additional">
                    <p>{props.cardData.model}</p>
                    <p>{props.cardData.starship_class}</p>
                    <p><img src="" alt="" />{props.cardData.max_atmosphering_speed}</p>
                </span>
            </div>

            <div className="card-body">
                {props.cardData.films.length > 0 &&
                <CardList data={props.cardData.films} title={'Films'} />}
                {props.cardData.pilots.length > 0 &&
                <CardList data={props.cardData.pilots} title={'Pilots'} />}
            </div>
        </div>
    </div>
);

StarshipDetails.propTypes = {
    cardData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        starship_class: PropTypes.string.isRequired,
        max_atmosphering_speed: PropTypes.string.isRequired,
        films: PropTypes.array,
        pilots: PropTypes.array
    }).isRequired,
    goBackToPage: PropTypes.func.isRequired
};

export default StarshipDetails;