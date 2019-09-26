import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/star-wars-logo.png';

import './style.css';

function selectFilter(filter, filteredBy) {
    if (filter === filteredBy) return 'filter-selected';
    return '';
}

const Header = props => (
    <div className="header-container">
        <header>
            <div className="logo">
                <img src={logo} alt="Star Wars Logo" />
            </div>
            <div className="buttons">
                <nav>
                    <button className={selectFilter('people', props.filteredBy)} onClick={() => props.fetchData('people', 1)}>Peoples</button>
                    <button className={selectFilter('starships', props.filteredBy)} onClick={() => props.fetchData('starships', 1)}>Starships</button>
                    <button className={selectFilter('films', props.filteredBy)} onClick={() => props.fetchData('films', 1)}>Films</button>
                    <button className={selectFilter('vehicles', props.filteredBy)} onClick={() => props.fetchData('vehicles', 1)}>Vehicles</button>
                    <button className={selectFilter('species', props.filteredBy)} onClick={() => props.fetchData('species', 1)}>Species</button>
                    <button className={selectFilter('planets', props.filteredBy)} onClick={() => props.fetchData('planets', 1)}>Planets</button>
                </nav>
            </div>
        </header>
    </div>
);

Header.propTypes = {
    filteredBy: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired
};

export default Header;