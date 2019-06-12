import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from  "./index.css"
import {Route,Link} from 'dva/router';

import Add from "./Exam/add/index"
import Classify from "./Exam/classify/index"
import Test from "./Exam/test/index"

const { SubMenu } = Menu;
const { Header,Sider } = Layout;

function IndexPage() {
  return <Layout style={{display:'flex',flexDirection: "column",width:"100%",height:"100%"}}>
       <Header className={styles.minHeard}>
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
       </Header>
       <div className={styles.center}>
       <Sider style={{height:"100%"}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key=""
              title={
                <span>
                  <Icon type="user" />
                  考试管理
                </span>
              }
            >
              <Menu.Item key="1">
              <Link to="/exam/add">添加试题</Link>
              </Menu.Item>
              <Menu.Item key="2">
              <Link to="/exam/classify">试题分类</Link>
              </Menu.Item>
              <Menu.Item key="3">
              <Link to="/exam/test">查看试题</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        
          <div>
           <Route path="/exam/add" component={Add}></Route>
           <Route path="/exam/classify" component={Classify}></Route>
           <Route path="/exam/test" component={Test}></Route>
          </div>
       </div>
       
  </Layout>
}

export default connect()(IndexPage);
