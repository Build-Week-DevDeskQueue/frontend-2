import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './navbar.css';
import LandingPage from '../LandingPage';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import OpenIssues from './Open';
import ResolvedIssues from './Resolved';
import PrivateRoute from '../utils/PrivateRoute';
import App from '../App';
import LoginForm from '../LoginForm';

const AppRouter = () => (
  <Switch>

    <Route exact path="/signin" component={LoginForm} />
    <PrivateRoute path="/" component={LandingPage} />

    <PrivateRoute exact path="/open" component={OpenIssues} />
    <PrivateRoute exact path="/resolved" component={ResolvedIssues} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Switch>
);

export default AppRouter;
