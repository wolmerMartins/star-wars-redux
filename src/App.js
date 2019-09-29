import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';
import Loader from './components/Loader';
import Message from './components/Message';

import './global.css';

function App({
  isLoading,
  isSelectedCard,
  isError
}) {
  return (
      <div className="App">
        <div className="app-container">
          <Header />
            <BrowserRouter>
              <Routes />
              { isError && <Message /> }
              { isLoading && <Loader /> }
              { !isSelectedCard && <Redirect to="/" /> }
              { isSelectedCard && <Redirect to="/details" /> }
            </BrowserRouter>
        </div>
      </div>
  );
}

const mapStateToProps = ({
  getDataByIdReducer,
  getDataByPageReducer,
  handleErrorReducer
}) => ({
  isLoading: getDataByPageReducer.isLoading || getDataByIdReducer.isLoading,
  isSelectedCard: getDataByIdReducer.isSelectedCard,
  isError: handleErrorReducer.status
});

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSelectedCard: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps
)(App);