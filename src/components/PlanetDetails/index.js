import React from 'react';

import Context from '../../context/Context';
import CardList from '../CardList';
import DetailsImage from '../DetailsImage';

const PlanetDetails = props => (
    <Context.Consumer>
        {context => (
            <div className="card-details-container">
                <DetailsImage name={context.dataSelected.data.name} goBack={context.returnToHome} />
                
                <div className="card-infos">
                    <div className="card-header">
                        <span className="card-name-location">
                            <h2>{context.dataSelected.data.name}</h2>
                            <h3><img src="" alt="" />{context.dataSelected.data.terrain}</h3>
                        </span>

                        <span className="card-additional">
                            <p>{context.dataSelected.data.climate}</p>
                            <p>{context.dataSelected.data.gravity}</p>
                            <p>{context.dataSelected.data.orbital_period}</p>
                        </span>
                    </div>

                    <div className="card-body">
                        {context.dataSelected.data.films.length > 0 &&
                        <CardList data={context.dataSelected.data.films} title={'Films'} />}
                        {context.dataSelected.data.residents.length > 0 &&
                        <CardList data={context.dataSelected.data.residents} title={'Residents'} />}
                    </div>
                </div>
            </div>
        )}
    </Context.Consumer>
);

export default PlanetDetails;