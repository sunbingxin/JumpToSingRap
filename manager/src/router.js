import React from 'react';
import SpaMain from './views/Main/index';
import { Router, Route, Switch } from 'dva/router';
import Login from './views/Logo/login';
import 'antd/dist/antd.css'; 
import {connect} from "dva";
//--------------------------------国际化
import {IntlProvider,addLocaleData} from "react-intl";
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from './lang/zh-CN.js';
import enUS from './lang/ex-US.js';
const localMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);
const mapStateToProps = state=>{
  return {
    locale: state.global.locale
  }
}

const RouterView = connect(mapStateToProps)(({locale,history})=>{
  return <IntlProvider locale={locale} messages={localMap[locale]}>
     <Router history={history}>
       <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={SpaMain} />
      </Switch>
     </Router>
  </IntlProvider>
})
function RouterConfig({ history }) {
  return (
      <RouterView  history={history} />
  );
}

export default RouterConfig;
