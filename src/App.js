import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';

import Provider from './context/Provider';
import Routes from './routes';

import Header from './components/Header';
import Loader from './components/Loader';

import './global.css';

function App({ isLoading }) {
  return (
    <Provider>
      <div className="App">
        <div className="app-container">
          <Header />
            <BrowserRouter>
              <Routes />
              {isLoading &&
                <Loader />
              }
              { /*!context.dataSelected.status &&*/ <Redirect to="/" /> }
              {/* context.dataSelected.status && <Redirect to="/details" /> */}
            </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

const mapStateToProps = state => ({
  isLoading: state.getDataByPageReducer.isLoading
});

export default connect(
  mapStateToProps
)(App);