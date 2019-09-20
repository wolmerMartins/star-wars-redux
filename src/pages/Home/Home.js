import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cards from '../../components/Cards';
//import Paginator from '../../components/Paginator';

import './style.css';

class Home extends Component {
    async componentDidMount() {
        await this.props.fetchData('people', 1);
    }

    render() {
        const {
            isLoading,
            actualPage,
            filteredBy,
            response
        } = this.props;
        
        return (
            <main className="home-container">
            {!isLoading &&
                response[filteredBy] &&
                    <div className="cards">
                        <Cards data={response[filteredBy][actualPage].data} />
                    </div>
            }

            {/*!isLoading &&
                <div className="cards">
                    <Cards data={response[filtered]} getDataById={context.getDataById} />
                </div>
            */}

            {/*!context.isLoading &&
                context.data.count > 10 &&
                <Paginator />
            */}
            </main>
        )
    }
}

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    actualPage: PropTypes.number.isRequired,
    filteredBy: PropTypes.string.isRequired,
    response: PropTypes.object.isRequired,
    fetchData: PropTypes.func.isRequired
};

export default Home;