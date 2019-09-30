import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/star-wars-logo.png';

import './style.css';

const filterData = (props, filter, page) => {
    props.goBackToPage();
    props.fetchData(filter, page);
};

const selectFilter = (filter, filteredBy) => {
    if (filter === filteredBy) return 'filter-selected';
    return '';
};

const Header = props => (
    <div className="header-container">
        <header>
            <div className="logo">
                <img src={logo} alt="Star Wars Logo" />
            </div>
            <div className="buttons">
                <nav>
                    <button className={selectFilter('people', props.filteredBy)} onClick={() => filterData(props, 'people', 1)}>Peoples</button>
                    <button className={selectFilter('starships', props.filteredBy)} onClick={() => filterData(props, 'starships', 1)}>Starships</button>
                    <button className={selectFilter('films', props.filteredBy)} onClick={() => filterData(props, 'films', 1)}>Films</button>
                    <button className={selectFilter('vehicles', props.filteredBy)} onClick={() => filterData(props, 'vehicles', 1)}>Vehicles</button>
                    <button className={selectFilter('species', props.filteredBy)} onClick={() => filterData(props, 'species', 1)}>Species</button>
                    <button className={selectFilter('planets', props.filteredBy)} onClick={() => filterData(props, 'planets', 1)}>Planets</button>
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