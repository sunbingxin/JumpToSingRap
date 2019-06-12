import React from 'react';
import SpaMain from './views/main/SpaMain';
import { Router, Route, Switch,Redirect } from 'dva/router';
import Login from './views/login/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SpaMain} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
