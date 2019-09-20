import React from 'react';

import Context from '../../context/Context';

import './style.css';

const Paginator = props => (
    <Context.Consumer>
    {context => (
        <div className="paginator-container">
            <nav>
                <button className="change-page" onClick={() => context.getDataByPage(context.data.previous)} disabled={!context.data.previous}>Previous</button>
                <button className="change-page" onClick={() => context.getDataByPage(context.data.next)} disabled={!context.data.next}>Next</button>
            </nav>
        </div>
    )}
    </Context.Consumer>
);

export default Paginator;