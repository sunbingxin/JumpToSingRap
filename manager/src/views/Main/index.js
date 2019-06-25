import React,{useState}from 'react';
import { connect } from 'dva';
import { Layout, Menu,Spin ,Select } from 'antd';
import styles from  "./index.css"
import {Route,Switch,Redirect} from 'dva/router';
import Menuitem from "../../components/MenuItem"
const { Header,Sider } = Layout;
const { Option } = Select;
function IndexPage(props) {
  let {global,imgSrc}=props;
  return <Layout style={{display:'flex',flexDirection: "column",width:"100%",height:"100%"}}>
       <Header className={styles.minHeard}>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
        <Select defaultValue="zh" style={{ width: 120 }} onChange={(e)=>{
         props.changeLocal(e);
        }} >
         <Option value="zh">中文</Option>
         <Option value="en">英文</Option>
        </Select>
         <div>
             <img src={imgSrc?imgSrc.path:'http://img.zz21.com/2016/0708/20160708110124825.jpg'} alt=""/>
             chenmanjie
              <Menu className={styles.mainMenu}>
              <Menu.Item key="1" onClick={()=>{
                console.log(props)
                props.history.push('/personage')
              }}>个人中心</Menu.Item>
              <Menu.Item key="2">我的班级</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">设置</Menu.Item>
              <Menu.Item key="4" onClick={userEnid}>退出登陆</Menu.Item>
              </Menu>
           </div> 
       </Header>
       <div className={styles.center}>
       <Sider style={{height:"100%"}}>
         <Menuitem></Menuitem>
        </Sider>
          <div className={styles.mainDiv}>
          { global? <div className={styles.spin}><Spin /></div>:null}
          <Switch>
            {/* 渲染你权限有的路由 */}
            <Redirect exact from="/"  to="/exam/add"/>
           {
            props.myView.map((item)=>{
              if (item.child){
                return item.child.map((value,key)=>{
                  return  <Route key={key}  path={value.path} component={value.component}/>
                })
              }
            })
          }
            {/* 权限没有的路由 就跳转到403*/}
           {props.forbiddenView.map((item)=>{
            return <Redirect key={item} from={item} to="/403"/>
          })}
          {/* 其余的都是跳转都404 */}
           <Redirect to="/404"/> 
           </Switch>
          </div>
       </div>
  </Layout>

  function userEnid(){
    props.clearView();
    props.history.replace("/login");
  }
}

let mapStateToProps=state=>{
  return {
    global:state.loading.global,
    locale:state.global.locale,
    myView: state.user.myView,
    forbiddenView: state.user.forbiddenView,
    imgSrc: state.user.imgSrc
  }
}

let mapDispatchToProps = dispatch=>{
  return {
    changeLocal: payload=>{
      dispatch({
        type: 'global/changeLocale',
        payload
      })
    },
    clearView(){
      dispatch({
        type:"user/clearView"
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
