import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';

import Provider from './context/Provider';
import Routes from './routes';

import Header from './components/Header';
import Loader from './components/Loader';

import './global.css';

function App({ isLoading, isSelectedCard }) {
  return (
    <Provider>
      <div className="App">
        <div className="app-container">
          <Header />
            <BrowserRouter>
              <Routes />
              {isLoading && <Loader /> }
              { !isSelectedCard && <Redirect to="/" /> }
              { isSelectedCard && <Redirect to="/details" /> }
            </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

const mapStateToProps = state => ({
  isLoading: state.getDataByPageReducer.isLoading || state.getDataByIdReducer.isLoading,
  isSelectedCard: state.getDataByIdReducer.isSelectedCard
});

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSelectedCard: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps
)(App);