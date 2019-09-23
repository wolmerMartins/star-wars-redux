import React from 'react';

import PeopleDetails from '../../components/PeopleDetails';
/*import StarshipDetails from '../../components/StarshipDetails';
import FilmDetails from '../../components/FilmDetails';
import VehicleDetails from '../../components/VehicleDetails';
import SpecieDetails from '../../components/SpecieDetails';
import PlanetDetails from '../../components/PlanetDetails';*/

import './style.css';

const Details = props => (
    <div>
        {props.filter === 'people' && <PeopleDetails />}
        {/*context.filteredBy === 'starships' && <StarshipDetails />}
        {context.filteredBy === 'films' && <FilmDetails />}
        {context.filteredBy === 'vehicles' && <VehicleDetails />}
        {context.filteredBy === 'species' && <SpecieDetails />}
{context.filteredBy === 'planets' && <PlanetDetails />*/}
    </div>
);

export default Details;