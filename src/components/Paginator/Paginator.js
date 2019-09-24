import React from 'react';

import './style.css';

const disableNextButton = props => {
    const {
        isLoading,
        actualPage,
        filteredBy,
        response
    } = props;

    return isLoading || !response[filteredBy][actualPage].nextPage;
};

const disablePrevButton = props => {
    const {
        isLoading,
        actualPage,
        filteredBy,
        response
    } = props;

    return isLoading || !response[filteredBy][actualPage].prevPage;
};

const Paginator = props => (
    <div className="paginator-container">
        {console.log(props)}
        <nav>
            <button className="change-page"
                onClick={() =>
                    props.fetchData(props.filteredBy, props.response[props.filteredBy][props.actualPage].prevPage)}
                disabled={disablePrevButton(props)}>Previous</button>
            <button className="change-page"
                onClick={() =>
                    props.fetchData(props.filteredBy, props.response[props.filteredBy][props.actualPage].nextPage)}
                    disabled={disableNextButton(props)}>Next</button>
        </nav>
    </div>
);

export default Paginator;