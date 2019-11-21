import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Navbar.css';

import SignIn from './SignIn';
import Dashboard from './Dashboard';
import OpenIssues from './Open';
import ResolvedIssues from './Resolved';
import PrivateRoute from '../utils/PrivateRoute';

const AppRouter = () => (
  <Switch>
    <Route exact path="/signin" component={SignIn} />
    <PrivateRoute exact path="/open" component={OpenIssues} />
    <PrivateRoute exact path="/resolved" component={ResolvedIssues} />

    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Switch>
);

export default AppRouter;
