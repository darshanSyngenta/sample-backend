import { history } from 'core/history';
import { LoginComponent } from 'pages/login';
import { PageNotFound } from 'pages/page-not-found';
import { RecoveryPassword } from 'pages/password-recovery/RecoveryPassword';
import { Signup } from 'pages/signup';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

export const Public = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact={true} component={LoginComponent} />
        <Route path="/recovery-password" exact={true} component={RecoveryPassword} />
        <Route path="/signup" exact={true} component={Signup} />
        <Route path="/" exact={true} component={LoginComponent} />

        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Public;
