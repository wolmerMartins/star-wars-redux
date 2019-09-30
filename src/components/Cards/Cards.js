import React from 'react';
import Utils from '../../utils/Utils';
import { fetchCardDataIfNeeded } from '../../actions/getDataById';

import images from '../../assets/images/images';

import './style.css';

const setImagePath = res => {
    return res.name ? images[Utils.removeSpecialCharacters(res.name)] : images[Utils.removeSpecialCharacters(res.title)];
};

const Cards = props => (
    props.data.map(res =>
        <div key={res.url} className="card-container">
            <button onClick={
                () => props.dispatch(fetchCardDataIfNeeded(res.url))
            } className="card-selected">
                Click for details
            </button>
            <div className="card">
                <img className="background-image" src={setImagePath(res)} alt="ilustration of card component" />
                <div className="card-name">
                    <h2>{res.name ? res.name : res.title}</h2>
                </div>
            </div>
        </div>
    )
);

export default Cards;