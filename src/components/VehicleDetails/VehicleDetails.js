import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../CardList';
import DetailsImage from '../DetailsImage';
import CardDetailsHeader from '../CardDetailsHeader';

import { withLists } from '../WithLists';

const VehicleDetails = props => (
    <div className="card-details-container">
        <DetailsImage name={props.cardData.name} goBack={props.goBackToPage} />
        
        <div className="card-infos">
            <CardDetailsHeader cardData={props.cardData} subtitle={'manufacturer'}
                additionalData={['model', 'vehicle_class', 'max_atmosphering_speed']} />

            <div className="card-body">
                <CardList lists={props.lists} />
            </div>
        </div>
    </div>
);

VehicleDetails.propTypes = {
    cardData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        vehicle_class: PropTypes.string.isRequired,
        max_atmosphering_speed: PropTypes.string.isRequired,
        films: PropTypes.array,
        pilots: PropTypes.array
    }).isRequired,
    lists: PropTypes.array.isRequired,
    goBackToPage: PropTypes.func.isRequired
};

export default withLists(VehicleDetails);