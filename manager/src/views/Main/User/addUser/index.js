import React ,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from  "./index.css"
import {Layout,Breadcrumb} from "antd";
const { Content } = Layout;
function IndexPage(props) {
 return  <Layout style={{ padding: '0 24px 24px' }}>
 <Breadcrumb style={{ margin: '16px 0' }}>
   <Breadcrumb.Item>添加用户</Breadcrumb.Item>
 </Breadcrumb>
   <Content>
    123 
  </Content>
</Layout>
}

let mapStateToProps=state=>{
  return {}
}

let mapDispatchToProps=dispatch=>{
    return {}
  }

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
