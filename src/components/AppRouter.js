import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Navbar.css';

import Dashboard from './Dashboard';
import OpenIssues from './Open';
import ResolvedIssues from './Resolved';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/open" component={OpenIssues} />
    <Route exact path="/resolved" component={ResolvedIssues} />
  </Switch>
);

export default AppRouter;
