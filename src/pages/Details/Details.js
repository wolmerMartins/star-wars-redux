import React from 'react';

import PeopleDetails from '../../components/PeopleDetails';
import StarshipDetails from '../../components/StarshipDetails';
import FilmDetails from '../../components/FilmDetails';
import VehicleDetails from '../../components/VehicleDetails';
import SpecieDetails from '../../components/SpecieDetails';
import PlanetDetails from '../../components/PlanetDetails';

import './style.css';

const Details = props => (
    <div>
        {props.filter === 'people' && <PeopleDetails />}
        {props.filter === 'starships' && <StarshipDetails />}
        {props.filter === 'films' && <FilmDetails />}
        {props.filter === 'vehicles' && <VehicleDetails />}
        {props.filter === 'species' && <SpecieDetails />}
        {props.filter === 'planets' && <PlanetDetails />}
    </div>
);

export default Details;