import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import Login from './views/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Redirect path='/' to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
