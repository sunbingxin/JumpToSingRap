import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from  "./SpaMain.css"
import {Route,Link,Switch} from 'dva/router';
import MenuComp from '../../components/main-left'
import ExamAdd from "./exam/add/index"
import ExamClassify from "./exam/classify/index"
import ExamTest from "./exam/test/index"
import UserAdd from './user/add'
import userShow from './user/show'


const { SubMenu } = Menu;
const { Header,Sider } = Layout;

function IndexPage() {
  return <Layout style={{display:'flex',flexDirection: "column",width:"100%",height:"100%"}}>
      <div className={styles.minHeard}>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
         <div>
             <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt=""/>
             chenmanjie
              <Menu className={styles.mainMenu}>
              <Menu.Item key="1">个人中心</Menu.Item>
              <Menu.Item key="2">我的班级</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">设置</Menu.Item>
              <Menu.Item key="4">退出登陆</Menu.Item>
              </Menu>
           </div> 
        </div>
       <div className={styles.center}>
       <Sider style={{height:"100%"}}>
         <MenuComp/>
        </Sider>
          <div>
          <Switch>
            <Route path="/exam/add" component={ExamAdd}></Route>
            <Route path="/exam/classify" component={ExamClassify}></Route>
            <Route path="/exam/test" component={ExamTest}></Route>
           </Switch>
          </div>
       </div>
       
  </Layout>
}

export default connect()(IndexPage);
