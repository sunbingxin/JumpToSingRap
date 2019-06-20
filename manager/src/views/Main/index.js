import React,{useState}from 'react';
import { connect } from 'dva';
import { Layout, Menu,Spin ,Select } from 'antd';
import styles from  "./index.css"
import {Route,Switch} from 'dva/router';


import Menuitem from "../../components/MenuItem"
import Add from "./Exam/add/index"
import Classify from "./Exam/classify/index"     //考试管理
import Test from "./Exam/test/index"
import Detail from "./Exam/detail/index"
//------------------------------------------------------
import Adduser from "./User/addUser/index"
//-------------------------------------------------------
import ClassManage from "./Class/classManage/index"
import Teammanage from "./Class/teammanage/index"
import Show from './User/show/index'

import Markinglists from './Marking/lists/index'
import ExamDetail from './Marking/ExamDetail/index'
import MarkingAdd from './Marking/add/index'
import Adddetil from './Marking/Adddetil/index'

import Student from './Class/student/index'

import ClassList from './Paper/classlist/index'
import ClassMate from './Paper/classmate/index'
import ClassDetail from './Paper/detail/index'

const { Header,Sider } = Layout;
const { Option } = Select;
function IndexPage(props) {
  let {global}=props;
  console.log(props.locale);
  return <Layout style={{display:'flex',flexDirection: "column",width:"100%",height:"100%"}}>
       <Header className={styles.minHeard}>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
        <button onClick={()=>props.changeLocal(props.locale==='zh'?'en':'zh')}>{props.locale==='zh'?'中文':'英文'}</button> 
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
         <Menuitem></Menuitem>
        </Sider>
          <div className={styles.mainDiv}>
          { global? <div className={styles.spin}> <Spin /></div>:null}
          <Switch>
           <Route path="/exam/add" component={Add}></Route>
           <Route path="/exam/detail" component={Detail}></Route>
           <Route path="/exam/classify" component={Classify}></Route>
           <Route path="/exam/test" component={Test}></Route>
           <Route path="/exam/ExamDetail" component={ExamDetail}></Route>

           <Route path="/user/adduser" component={Adduser}></Route>
           <Route path="/user/show" component={Show}></Route>

           <Route path="/marking/Adddetil" component={Adddetil}></Route>
           <Route path="/marking/add" component={MarkingAdd}></Route>
           <Route path="/marking/lists" component={Markinglists}></Route>
        
           <Route path="/class/classmanage" component={ClassManage}></Route> 
           <Route path="/class/teammanage" component={Teammanage}></Route>  
           <Route path="/class/student" component={Student}></Route>

           
           <Route path="/paper/classlist" component={ClassList}></Route>
           <Route path="/paper/classmate" component={ClassMate}></Route>
           <Route path="/paper/detail" component={ClassDetail}></Route>
           </Switch>
          </div>
       </div>
  </Layout>
}

let mapStateToProps=state=>{
  return {
    global:state.loading.global,
    locale:state.global.locale,
  }
}

let mapDispatchToProps = dispatch=>{
  return {
    changeLocal: payload=>{
      dispatch({
        type: 'global/changeLocale',
        payload
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
