import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

const routes = props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
    </Switch>
);

export default routes;