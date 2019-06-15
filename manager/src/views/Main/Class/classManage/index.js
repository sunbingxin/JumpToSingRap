import React ,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from  "./index.css"
import {Layout,Breadcrumb,Button} from "antd";
const { Content } = Layout;
function IndexPage(props) {
 return  <Layout style={{ padding: '0 24px 24px' }}>
 <Breadcrumb style={{ margin: '16px 0' }}>
   <Breadcrumb.Item>班级管理</Breadcrumb.Item>
 </Breadcrumb>
   <Content
    style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
   >
   <Button type="primary" icon="plus" onClick={()=>{
      //setState(true)
    }}>
      添加类型
    </Button>
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
