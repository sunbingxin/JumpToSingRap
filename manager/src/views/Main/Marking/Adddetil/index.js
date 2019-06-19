import React ,{useEffect,useState} from 'react';
import { connect } from 'dva';
import {Layout, Breadcrumb} from 'antd';
const { Content } = Layout;
function IndexPage(props) {
  let {objAll} =props;
  console.log(props.history)
  console.log(objAll,"=============");
  return  <Layout style={{ padding: "24px"  }}>
  <Breadcrumb style={{padding: "10px 0px"}}>
    <Breadcrumb.Item>考试详情页</Breadcrumb.Item>
  </Breadcrumb>
  <Content
    style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
  </Content>
</Layout>
}

let mapStateProps=state=>{
  return {
    ...state.user
  }
}

let mapDispatchProps=dispatch=>{
  return {}
}
export default connect(mapStateProps,mapDispatchProps)(IndexPage);
