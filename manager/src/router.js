import React from 'react';
import SpaMain from './views/Main/index';
import { Router, Route, Switch } from 'dva/router';
import Login from './views/Logo/login';
import 'antd/dist/antd.css'; 
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/"  component={SpaMain}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
