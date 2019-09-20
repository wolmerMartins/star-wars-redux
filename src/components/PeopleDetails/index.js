import React from 'react';

import Context from '../../context/Context';
import CardList from '../CardList';
import DetailsImage from '../DetailsImage';

const PeopleDetails = props => (
    <Context.Consumer>
    {context => (
        <div className="card-details-container">
            <DetailsImage name={context.dataSelected.data.name} goBack={context.returnToHome} />
            
            <div className="card-infos">
                <div className="card-header">
                    <span className="card-name-location">
                        <h2>{context.dataSelected.data.name}</h2>
                        <h3><img src="" alt="" />{context.dataSelected.data.homeworld.name}</h3>
                    </span>

                    <span className="card-additional">
                        <p>{context.dataSelected.data.species.name}</p>
                        <p>{context.dataSelected.data.gender}</p>
                        <p><img src="" alt="" />{context.dataSelected.data.birth_year}</p>
                    </span>
                </div>

                <div className="card-body">
                    {context.dataSelected.data.films.length > 0 &&
                    <CardList data={context.dataSelected.data.films} title={'Films'} />}
                    {context.dataSelected.data.starships.length > 0 &&
                    <CardList data={context.dataSelected.data.starships} title={'Starships'} />}
                    {context.dataSelected.data.vehicles.length > 0 &&
                    <CardList data={context.dataSelected.data.vehicles} title={'Vehicles'} />}
                </div>
            </div>
        </div>
    )}
    </Context.Consumer>
);

export default PeopleDetails;