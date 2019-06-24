import React from 'react';
import SpaMain from './views/Main/index';
import { Router, Route, Switch } from 'dva/router';
import Login from './views/Logo/login';
import get404 from './views/Other/404.js';
import get403 from './views/Other/403.js';
import personage from "./views/personage/index";
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
        <Route path="/personage" component={personage} />
        <Route path="/403" component={get403} />
        <Route path="/404" component={get404} />
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
