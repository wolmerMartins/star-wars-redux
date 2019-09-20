import React from 'react';

import tie from '../../assets/images/tie-defender.png';

import './style.css';

const Loading = props => (
    <div className="loading-container">
        <div className="tie-container">
            <img className="tie-defender tie1" src={tie} alt="Tie defender starship" />
            <img className="tie-defender tie2" src={tie} alt="Tie defender starship" />
            <img className="tie-defender tie3" src={tie} alt="Tie defender starship" />
        </div>
    </div>
);

export default Loading;