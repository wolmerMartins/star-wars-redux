import React from 'react';

import { cardLists } from '../CardLists';

import './style.css';

const CardList = props => (
    <article>
        <div className="card-list-container">
            <h2>{props.title}</h2>
            <ul>
            {props.data.map(dt =>
                <li key={dt.name ? dt.name : dt.title}>{dt.name ? dt.name : dt.title}</li>
            )}
            </ul>
        </div>
    </article>
);

export default cardLists(CardList);