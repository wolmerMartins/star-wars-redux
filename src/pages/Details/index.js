import React from 'react';

import Context from '../../context/Context';
import Loader from '../../components/Loader';
import PeopleDetails from '../../components/PeopleDetails';
import StarshipDetails from '../../components/StarshipDetails';
import FilmDetails from '../../components/FilmDetails';
import VehicleDetails from '../../components/VehicleDetails';
import SpecieDetails from '../../components/SpecieDetails';
import PlanetDetails from '../../components/PlanetDetails';

import './style.css';

const Details = props => (
    <Context.Consumer>
    {context => (
        <div>
        { context.isLoading && <Loader /> }
        {!context.isLoading &&
            <div>
                {context.filteredBy === 'people' && <PeopleDetails />}
                {context.filteredBy === 'starships' && <StarshipDetails />}
                {context.filteredBy === 'films' && <FilmDetails />}
                {context.filteredBy === 'vehicles' && <VehicleDetails />}
                {context.filteredBy === 'species' && <SpecieDetails />}
                {context.filteredBy === 'planets' && <PlanetDetails />}
            </div>
        }
        </div>
    )}
    </Context.Consumer>
);

export default Details;