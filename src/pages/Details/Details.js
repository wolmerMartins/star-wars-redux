import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PeopleDetails from '../../components/PeopleDetails';
import StarshipDetails from '../../components/StarshipDetails';
import FilmDetails from '../../components/FilmDetails';
import VehicleDetails from '../../components/VehicleDetails';
import SpecieDetails from '../../components/SpecieDetails';
import PlanetDetails from '../../components/PlanetDetails';

import './style.css';

const Details = props => {
    if (!props.selectedCardId) return <Redirect to="/" />
    return (
        <div>
            {props.filter === 'people' && <PeopleDetails />}
            {props.filter === 'starships' && <StarshipDetails />}
            {props.filter === 'films' && <FilmDetails />}
            {props.filter === 'vehicles' && <VehicleDetails />}
            {props.filter === 'species' && <SpecieDetails />}
            {props.filter === 'planets' && <PlanetDetails />}
        </div>
    )
};

Details.propTypes = {
    selectedCardId: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired
};

export default Details;