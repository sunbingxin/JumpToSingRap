import React ,{useEffect} from 'react';
import { connect} from 'dva';
import { Layout, Breadcrumb,Button} from 'antd';
const { Content } = Layout;
function IndexPage(props) {
  let {addExam}=props;
  useEffect(()=>{
    addExam();
  },[props])
  return    <Layout style={{ padding: '0 24px 24px' }}>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>试题分类</Breadcrumb.Item>
  </Breadcrumb>
  <Content
    style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
    <Button type="primary" icon="plus">
      添加类型
    </Button>
  </Content>
</Layout>
}
let mapStateToProps=state=>{
  return {
    ...state.user
  }
}
let mapdispatchToProps=dispatch=>{
  return {
    addExam(){
      dispatch({
        type:"user/exam",
      })
    }
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(IndexPage);
