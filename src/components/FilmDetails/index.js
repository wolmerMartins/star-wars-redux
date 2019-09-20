import React from 'react';

import Context from '../../context/Context';
import CardList from '../CardList';
import DetailsImage from '../DetailsImage';

const FilmDetails = props => (
    <Context.Consumer>
        {context => (
            <div className="card-details-container">
                <DetailsImage name={context.dataSelected.data.title} goBack={context.returnToHome} />
                
                <div className="card-infos">
                    <div className="card-header">
                        <span className="card-name-location">
                            <h2>{context.dataSelected.data.title}</h2>
                            <h3><img src="" alt="" />{context.dataSelected.data.director}</h3>
                        </span>

                        <span className="card-additional">
                            <p>{context.dataSelected.data.producer}</p>
                            <p>{context.dataSelected.data.release_date}</p>
                        </span>
                    </div>

                    <div className="card-body">
                        {context.dataSelected.data.species.length > 0 &&
                        <CardList data={context.dataSelected.data.species} title={'Species'} />}
                        {context.dataSelected.data.starships.length > 0 &&
                        <CardList data={context.dataSelected.data.starships} title={'Starships'} />}
                        {context.dataSelected.data.vehicles.length > 0 &&
                        <CardList data={context.dataSelected.data.vehicles} title={'Vehicles'} />}
                        {context.dataSelected.data.planets.length > 0 &&
                        <CardList data={context.dataSelected.data.planets} title={'Planets'} />}
                        {context.dataSelected.data.characters.length > 0 &&
                        <CardList data={context.dataSelected.data.characters} title={'Characters'} />}
                    </div>
                </div>
            </div>
        )}
    </Context.Consumer>
);

export default FilmDetails;