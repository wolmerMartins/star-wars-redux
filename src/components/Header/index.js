import React from 'react';

import Context from '../../context/Context';

import logo from '../../assets/images/star-wars-logo.png';

import './style.css';

function selectFilter(filter, filteredBy) {
    if (filter === filteredBy) return 'filter-selected';
    return '';
}

const Header = props => (
    <Context.Consumer>
    {context => (
        <div className="header-container">
            <header>
                <div className="logo">
                    <img src={logo} alt="Star Wars Logo" />
                </div>
                <div className="buttons">
                    <nav>
                        <button className={selectFilter('people', context.filteredBy)} onClick={() => context.getDataByFilter('people')}>Peoples</button>
                        <button className={selectFilter('starships', context.filteredBy)} onClick={() => context.getDataByFilter('starships')}>Starships</button>
                        <button className={selectFilter('films', context.filteredBy)} onClick={() => context.getDataByFilter('films')}>Films</button>
                        <button className={selectFilter('vehicles', context.filteredBy)} onClick={() => context.getDataByFilter('vehicles')}>Vehicles</button>
                        <button className={selectFilter('species', context.filteredBy)} onClick={() => context.getDataByFilter('species')}>Species</button>
                        <button className={selectFilter('planets', context.filteredBy)} onClick={() => context.getDataByFilter('planets')}>Planets</button>
                    </nav>
                </div>
            </header>
        </div>
    )}
    </Context.Consumer>
)

export default Header;