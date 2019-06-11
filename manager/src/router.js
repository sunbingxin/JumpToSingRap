import React from 'react';
import SpaMain from './views/SpaMain';
import { Router, Route, Switch,Redirect } from 'dva/router';
import Login from './views/login';
import 'antd/dist/antd.css'; 
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/main" exact component={SpaMain} />
        <Route path="/login" exact component={Login} />
        <Redirect path='/' to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
