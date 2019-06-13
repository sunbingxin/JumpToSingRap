import React from 'react';
import { connect } from 'dva';
import { Layout, Breadcrumb,Input} from 'antd';
import Editor from 'for-editor'
import "./index.scss"
const { Content } = Layout;
let value="";
function handleChange(){

}
function IndexPage() {
  return    <Layout style={{ padding: '0 24px 24px' }}>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>添加试题</Breadcrumb.Item>
  </Breadcrumb>
  <Content
    style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
  <h4>题目信息</h4>
  <h4>题干</h4>
  <Input placeholder="请输入题目标题,不超过20个字" />
  <Editor value={value} onChange={handleChange}/>
  <h4>请选择考试类型:</h4>
  <h4>请选择课程类型:</h4>
  <h4>请选择题目类型:</h4>
  </Content>
</Layout>
}

export default connect()(IndexPage);
