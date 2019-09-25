import React from 'react';

import './style.css';

const disableButton = (button, props) => {
    const {
        isLoading,
        actualPage,
        filteredBy,
        response
    } = props;

    return isLoading || !response[filteredBy][actualPage][`${button}Page`];
};

const Paginator = props => (
    <div className="paginator-container">
        <nav>
            <button className="change-page"
                onClick={() =>
                    props.fetchData(props.filteredBy, props.response[props.filteredBy][props.actualPage].prevPage)}
                disabled={disableButton('prev', props)}>Previous</button>
            <button className="change-page"
                onClick={() =>
                    props.fetchData(props.filteredBy, props.response[props.filteredBy][props.actualPage].nextPage)}
                    disabled={disableButton('next', props)}>Next</button>
        </nav>
    </div>
);

export default Paginator;