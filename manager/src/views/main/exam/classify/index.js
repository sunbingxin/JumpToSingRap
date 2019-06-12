
import { connect } from 'dva';
import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon ,Form} from 'antd';
import 'antd/dist/antd.css'; // or 
import React, {useState,useEffect}from 'react'
const { Header, Content, Sider } = Layout;
function Examclassify(props){
  // 处理表单提交
  useState(()=>{
      let {classify} = props
      classify()
  },[props])
  // 表单校验
  return <Layout style={{ padding: '0 24px 24px' }}>
    <Breadcrumb style={{ margin: '16px 0' ,fontSize:'24px'}}>
        <Breadcrumb.Item>试题类型</Breadcrumb.Item>
    </Breadcrumb>
    <Content
        style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 480,
        }}
    >
        Content
    </Content>
  </Layout>
}

// props的类型检查
Examclassify.propTypes = {

}
// props的默认值
Examclassify.defaultProps = {

}
let mapStateToProps = state=>{

  return {
    
  }
}
let mapDispatchToProps = dispatch=>{
  return {
      classify(){
          dispatch({
              type:'user/classify'
          })
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Examclassify);
