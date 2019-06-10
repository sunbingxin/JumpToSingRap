import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/IndexPage';
import SpaMain from './views/SpaMain';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/main" exact component={SpaMain} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
