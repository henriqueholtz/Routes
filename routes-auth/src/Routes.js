import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotAuthenticated from './NotAuthenticated';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello World</h1>} />
            <Route exact path="/notAuthenticated" component={NotAuthenticated} />
            <PrivateRoute exact path="/orders" component={() => <h1>List Orders</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;